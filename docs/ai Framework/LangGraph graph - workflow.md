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
import { ToolNode } from "@langchain/langgraph/prebuilt";
import { tool } from "@langchain/core/tools";
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, AIMessage } from "@langchain/core/messages";
import { StateGraph, MessagesAnnotation } from "@langchain/langgraph";

const sayHi = tool(
  ({ name }: { name: string }): void => {
    console.log(`Hi, ${name}!`);
  },
  {
    name: "sayHi",
    description: "say Hi with user's name if provided",
    // input schema
    schema: z.object({
      name: z.string(),
    }),
  },
);

const sayGoodbye = tool(
  ({ name }: { name: string }): void => {
    console.log(`Hi, ${name}!`);
  },
  {
    name: "sayGoodbye",
    description: "say goodbye with user's name if provided",
    // input schema
    schema: z.object({
      name: z.string(),
    }),
  },
);

// Define the tools for the agent to use
const tools = [sayHi, sayGoodbye];
const toolNode = new ToolNode(tools);

// Create a model and give it access to the tools
const model = new ChatOpenAI({
  model: "gpt-4o-mini",
  temperature: 0,
}).bindTools(tools);

// 계속할지 말지 결정하는 함수 정의
function shouldContinue({ messages }: typeof MessagesAnnotation.State) {
  const lastMessage = messages[messages.length - 1] as AIMessage;
  // 도구 호출이 있으면 "tools" 노드로 라우팅
  if (lastMessage.tool_calls?.length) {
    return "tools";
  }
  // 그렇지 않으면 특수한 "__end__" 노드를 사용하여 멈춤
  return "__end__";
}

// 모델을 호출하는 함수 정의
async function callModel(state: typeof MessagesAnnotation.State) {
  const response = await model.invoke(state.messages);
  // 기존 목록에 추가되기 때문에 목록을 반환
  return { messages: [response] };
}

// Define a new graph
const workflow = new StateGraph(MessagesAnnotation)
  .addNode("agent", callModel)
  .addEdge("__start__", "agent") // __start__ is a special name for the entrypoint
  .addNode("tools", toolNode)
  .addEdge("tools", "agent")
  .addConditionalEdges("agent", shouldContinue);

// Finally, we compile it into a LangChain Runnable.
const app = workflow.compile();
```

## use the graph

```ts
// 첫번째 사용자 메시지를 실행 첫번째 노드로 이동
const finalState = await app.invoke({
  messages: [new HumanMessage("Hi, My name is John")],
});

console.log(finalState.messages[finalState.messages.length - 1].content);
// Hi, John!

// 다음 사용자 메시지가 오면 이전 상태를 기억해두고 있다가 그 다음 노드로 이동
const nextState = await app.invoke({
  // Including the messages from the previous run gives the LLM context.
  // This way it knows we're asking about the weather in NY
  messages: [...finalState.messages, new HumanMessage("Goodbye")],
});

console.log(nextState.messages[nextState.messages.length - 1].content);
// Goodbye, John!
```
