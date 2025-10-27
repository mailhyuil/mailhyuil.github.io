# LangGraph graph - workflow

## addNode

> 노드 함수 추가
>
> > 특수한 액션을 수행하거나 (tool), 모델을 호출하는 함수를 정의

## addEdge

> 엣지 추가
>
> > 엣지는 노드 간의 연결을 나타내며, 노드 간의 이동을 제어
> >
> > > 'agent', 'tools', '\_\_start\_\_', '\_\_end\_\_' 등의 값을 사용해서 특정 노드로 이동
> > >
> > > `import {START, END} from "@langchain/langgraph";`

## addConditionalEdges

> 조건부 엣지 함수 추가
>
> > 함수를 통해 조건을 만족하는 경우 엣지 값을 반환하여 특정 노드로 이동

## define a new graph

```ts
import { AIMessage, HumanMessage } from "@langchain/core/messages";
import { MemorySaver, MessagesAnnotation, StateGraph } from "@langchain/langgraph";
import { ToolNode } from "@langchain/langgraph/prebuilt";
import { ChatOpenAI } from "@langchain/openai";
import { inputDataTool } from "./helpers/input-data";
import { pushTool } from "./helpers/push";

/** ---- 0) Tools & Model ---- **/
const tools = [pushTool, inputDataTool];
const toolNode = new ToolNode(tools);

const model = new ChatOpenAI({
  model: "gpt-4o-mini",
  temperature: 0,
}).bindTools(tools);

/** ---- 1) Routing ---- **/
function shouldContinue({ messages }: typeof MessagesAnnotation.State) {
  console.log("shouldContinue");
  const last = messages[messages.length - 1] as AIMessage;
  if (last.tool_calls?.length) return "tools";
  return "__end__";
}

/** ---- 2) Model call ---- **/
async function callModel(state: typeof MessagesAnnotation.State): Promise<typeof MessagesAnnotation.State> {
  console.log("callModel");
  const response = await model.invoke(state.messages);
  return { messages: [response] };
}

/** ---- 4) 그래프 빌드 ---- **/
const checkpointer = new MemorySaver(); // 재개를 위해 필수
const workflow = new StateGraph(MessagesAnnotation)
  .addNode("agent", callModel)
  .addNode("tools", toolNode)
  .addEdge("__start__", "agent") // 시작 → 입력 대기 노드
  .addEdge("tools", "agent") // shouldContinue 함수에 따라 툴 노드 또는 종료 노드로 이동
  .addConditionalEdges("agent", shouldContinue); // 에이전트 실행 후 툴 실행 여부에 따라 툴 노드 또는 종료 노드로 이동

const app = workflow.compile({ checkpointer });

/** ---- 5) 터미널에서 입력 받아 재개하기 ---- **/
const thread_id = "demo-" + Math.random().toString(36).slice(2);

const systemPrompt = `
You are an assistant that can use tools.

Your goal:
- If user asks to send a notification but name, email, or message is missing, 
  you MUST call the tool "input-data-tool" to ask the user for that info.
- Once you have all of them, call the tool "push-tool" to send the notification.
- Do NOT ask the user directly in text. Use the tools.
`;

async function work(message: string) {
  for await (const _ of await app.stream(
    { messages: [new AIMessage(systemPrompt), new HumanMessage(message)] },
    { configurable: { thread_id } },
  )) {
    if (_.agent) {
      console.log(_.agent.messages[_.agent.messages.length - 1].content);
    }
  }

  const finalState = await app.getState({ configurable: { thread_id } });
  const values: typeof MessagesAnnotation.State = finalState.values;
  const last = values.messages[values.messages.length - 1];
  console.log("\n=== FINAL ===\n" + last.content + "\n");
}

function main() {
  work("Would you push a notification to the user?");
}
main();
```
