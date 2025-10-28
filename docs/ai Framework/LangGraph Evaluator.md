# LangGraph Evaluator

## evaluator-annotation.ts

```ts
import { Annotation, MessagesAnnotation } from "@langchain/langgraph";

export const EvaluatorAnnotation = Annotation.Root({
  ...MessagesAnnotation.spec,
  success_criteria: Annotation<string>({
    default: () => "",
    reducer: (state, value) => {
      return value;
    },
  }),
  feedback_on_work: Annotation<string>({
    default: () => "",
    reducer: (state, value) => {
      return value;
    },
  }),
  success_criteria_met: Annotation<boolean>({
    default: () => false,
    reducer: (state, value) => {
      return value;
    },
  }),
  user_input_needed: Annotation<boolean>({
    default: () => false,
    reducer: (state, value) => {
      return value;
    },
  }),
});
```

## evaluator.ts

```ts
import { AIMessage, BaseMessage, HumanMessage, SystemMessage } from "@langchain/core/messages";
import { MessagesAnnotation } from "@langchain/langgraph";
import { ChatOpenAI } from "@langchain/openai";
import { z } from "zod";
import { EvaluatorAnnotation } from "./annotation";

// Zod 스키마를 사용하여 평가 결과의 구조를 정의합니다.
const evaluatorSchema = z.object({
  feedback: z.string().describe("어시스턴트의 응답에 대한 피드백입니다."),
  success_criteria_met: z.boolean().describe("성공 기준이 충족되었는지 여부입니다."),
  user_input_needed: z.boolean().describe("사용자의 추가 입력이 필요한지 여부입니다."),
});

/**
 * 대화 기록을 문자열로 포맷팅하는 헬퍼 함수입니다.
 * @param MessagesAnnotation.State.messages - 포맷팅할 메시지 배열
 * @returns 대화 기록을 나타내는 단일 문자열
 */
function formatConversation(messages: (typeof MessagesAnnotation.State)["messages"]): string {
  return messages.map(msg => `${msg.type}: ${msg.content}`).join("\n");
}

// OpenAI 모델과 출력 파서를 설정합니다.
const evaluatorLlm = new ChatOpenAI({
  model: "gpt-4o-mini",
  temperature: 0,
});

const evaluatorLlmWithOutput = evaluatorLlm.withStructuredOutput(evaluatorSchema);

/**
 * 어시스턴트의 응답을 평가하여 작업 완료 여부를 결정하는 함수입니다.
 * @param CustomAnnotation.State - 현재 상태 객체
 * @returns 평가 결과가 포함된 새로운 상태 객체
 */
export async function evaluator(
  state: typeof EvaluatorAnnotation.State,
): Promise<Partial<typeof EvaluatorAnnotation.State>> {
  const lastResponse = state.messages[state.messages.length - 1].content;

  const systemMessage = `당신은 어시스턴트가 작업을 성공적으로 완료했는지 평가하는 평가자입니다.
주어진 기준에 따라 어시스턴트의 마지막 응답을 평가하세요. 피드백과 함께 성공 기준 충족 여부, 
그리고 사용자의 추가 입력이 필요한지에 대한 결정을 응답으로 보내주세요.`;

  let userMessage = `당신은 사용자와 어시스턴트 간의 대화를 평가하고 있습니다. 어시스턴트의 마지막 응답을 기반으로 다음에 수행할 작업을 결정합니다.

사용자의 원래 요청과 모든 응답을 포함한 전체 대화 내용은 다음과 같습니다:
${formatConversation(state.messages)}

이 과제의 성공 기준은 다음과 같습니다:
${state.success_criteria}

당신이 평가할 어시스턴트의 최종 응답은 다음과 같습니다:
${lastResponse}

피드백과 함께 이 응답이 성공 기준을 충족하는지 결정하여 응답하세요.
또한, 어시스턴트가 질문이 있거나, 명확한 설명이 필요하거나, 도움이 없이는 답변할 수 없는 상태로 보이는 경우 등 사용자의 추가 입력이 필요한지 결정하세요.`;

  if (state.feedback_on_work) {
    userMessage += `\n\n참고로, 어시스턴트의 이전 시도에 대해 다음과 같은 피드백을 제공했습니다: ${state.feedback_on_work}\n`;
    userMessage += "어시스턴트가 동일한 실수를 반복하는 경우, 사용자 입력이 필요하다고 응답하는 것을 고려하세요.";
  }

  const evaluatorMessages: BaseMessage[] = [
    new SystemMessage({ content: systemMessage }),
    new HumanMessage({ content: userMessage }),
  ];

  try {
    const evalResult = await evaluatorLlmWithOutput.invoke(evaluatorMessages);

    const newMessages: AIMessage[] = [new AIMessage({ content: `평가자 피드백: ${evalResult.feedback}` })];

    const newState: Partial<typeof EvaluatorAnnotation.State> = {
      messages: newMessages,
      feedback_on_work: evalResult.feedback,
      success_criteria_met: evalResult.success_criteria_met,
      user_input_needed: evalResult.user_input_needed,
    };
    return newState;
  } catch (error) {
    console.error("평가자 실행 중 오류 발생:", error);
    // 오류 발생 시 기본 상태 반환 또는 오류 처리
    const newState: Partial<typeof EvaluatorAnnotation.State> = {
      messages: [new SystemMessage({ content: "평가 중 오류가 발생했습니다." })],
      user_input_needed: true, // 오류 발생 시 사용자 입력이 필요하다고 가정
    };
    return newState;
  }
}
```

## mail.ts

```ts
import { AIMessage, BaseMessage, HumanMessage, SystemMessage } from "@langchain/core/messages";
import { END, START, StateGraph } from "@langchain/langgraph";
import { ToolNode } from "@langchain/langgraph/prebuilt";
import { ChatOpenAI } from "@langchain/openai";
import dotenv from "dotenv";
import { inputDataTool } from "../helpers/input-data";
import { pushTool } from "../helpers/push";
import { EvaluatorAnnotation } from "./annotation";
import { evaluator } from "./evaluator";
dotenv.config();
const tools = [pushTool, inputDataTool];
// Create a model and give it access to the tools
const model = new ChatOpenAI({
  model: "gpt-4o-mini",
  temperature: 0,
}).bindTools(tools);

/*#### 1. Define State Classes ####*/
function workerRouter({ messages }: typeof EvaluatorAnnotation.State) {
  const lastMessage = messages[messages.length - 1] as AIMessage;
  if (lastMessage.tool_calls?.length) {
    return "tools";
  }
  return "evaluator";
}

/**
 * 워커 노드에서 툴 및 성공 조건을 참고하여 LLM 호출을 담당하는 함수입니다.
 * @param state - CustomAnnotation.State 타입의 상태 객체
 * @returns 업데이트된 메시지 배열을 포함하는 Partial 상태 객체
 */
async function worker(state: typeof EvaluatorAnnotation.State): Promise<Partial<typeof EvaluatorAnnotation.State>> {
  // 시스템 메시지 작성
  let systemMessage = `당신은 도구(tool)를 활용해 작업을 완료하는 도움이 되는 어시스턴트입니다.
과제의 성공 기준이 만족되거나, 사용자에게 추가 질문/명확화가 필요할 때까지 계속 작업을 진행합니다.
다음은 성공 기준입니다:
${state.success_criteria}
이 과제와 관련해, 사용자에게 추가 질문이 있을 경우에는 명확하게 질문을 작성해서 답변하고,
완전히 해결했다면 바로 최종 답변을 해주세요. 예시:
질문: 요약이 필요한지, 상세 답이 필요한지 명확히 해주세요.

작업이 끝났다면, 질문을 하지 말고 최종 답변만 보내세요.
`;

  // 피드백이 존재하는 경우 시스템 메시지에 추가
  if (state.feedback_on_work) {
    systemMessage += `
이전에 작업을 완료했다고 판단했으나, 성공 기준이 충족되지 않아 반려되었습니다.
반려 사유 피드백:
${state.feedback_on_work}
피드백을 참고하여, 성공 기준을 충족하거나 사용자에게 질문이 있다면 질문을 작성해 주세요.
`;
  }

  // 메시지 배열 복사 및 시스템 메시지 삽입
  let foundSystemMessage = false;
  const messages: BaseMessage[] = state.messages.map(msg => {
    if (msg instanceof SystemMessage) {
      foundSystemMessage = true;
      // SystemMessage의 내용을 새로운 systemMessage로 교체
      return new SystemMessage({ content: systemMessage });
    }
    return msg;
  });

  if (!foundSystemMessage) {
    messages.unshift(new SystemMessage({ content: systemMessage }));
  }

  try {
    // LLM에 툴 포함하여 호출
    const response = await model.invoke(messages);

    return {
      messages: [response],
    };
  } catch (error) {
    console.error("worker 실행 오류:", error);
    // 에러 발생 시 사용자 입력이 필요하도록 안내
    return {
      messages: [new SystemMessage({ content: "작업 처리 중 오류가 발생했습니다. 다시 시도해 주세요." })],
    };
  }
}
function routeBasedOnEvaluation(state: typeof EvaluatorAnnotation.State) {
  if (state.success_criteria_met || state.user_input_needed) {
    return END;
  } else {
    return "worker";
  }
}

/*#### 2. Start the Graph Builder ####*/
const workflow = new StateGraph(EvaluatorAnnotation)
  /*#### 3. Create a Node ####*/
  .addNode("worker", worker)
  .addNode("tools", new ToolNode(tools))
  .addNode("evaluator", evaluator)
  /*#### 4. Create Edges ####*/
  .addEdge(START, "worker") // __start__ is a special name for the entrypoint
  .addEdge("tools", "worker")
  .addConditionalEdges("evaluator", routeBasedOnEvaluation, { worker: "worker", [END]: END })
  .addConditionalEdges("worker", workerRouter, { tools: "tools", evaluator: "evaluator" });
/*#### 5. Compile the Graph ####*/
const app = workflow.compile();
const systemPrompt = `
You are an assistant that can use tools.

Your goal:
- If user asks to send a notification but name, email, or message is missing, 
  you MUST call the tool "input-data-tool" to ask the user for that info.
- Once you have all of them, call the tool "push-tool" to send the notification.
- Do NOT ask the user directly in text. Use the tools.
`;
/*#### 6. Use the Graph ####*/
async function work() {
  try {
    const task =
      "사용자에게 '이름', '이메일', '추가 메세지'를 물어보고 오후 3시에 미팅이 있다고 푸시 알림을 보내주세요.";
    const success_criteria =
      "푸시 알림이 성공적으로 전송되어야 합니다. 알림 메시지에는 사용자의 '이름', '이메일'과 '추가 메세지'가 반드시 포함되어야 합니다. 또한 '미팅'과 '오후 3시'라는 단어가 반드시 포함되어야 합니다.";

    console.log("--- 테스트 시작: 푸시 알림 전송 ---");
    console.log(`요청: ${task}`);
    console.log(`성공 기준: ${success_criteria}\n`);

    const stream = await app.stream(
      {
        messages: [new SystemMessage(systemPrompt), new HumanMessage(task)],
        success_criteria: success_criteria,
      },
      {
        // To see all intermediate steps
        streamMode: "values",
      },
    );

    for await (const step of stream) {
      console.log("--- 중간 상태 ---");
      console.log(step.messages[step.messages.length - 1].content);
      console.log(step.success_criteria);
      console.log(step.feedback_on_work);
      console.log(step.success_criteria_met);
      console.log(step.user_input_needed);
      console.log("-----------------\n");
    }
  } catch (error) {
    console.error("작업 실행 중 오류가 발생했습니다:", error);
  }
}

function main() {
  work();
}
main();
```
