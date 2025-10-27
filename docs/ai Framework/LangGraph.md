# LangGraph

> LangChain을 기반으로 한 AI 워크플로우 오케스트레이션 도구입니다.
>
> > 여러 agent + 여러 tool + 검증 단계 + 루프 + 휴먼 승인까지 전체 파이프라인을 구축하는 프레임워크
> >
> > 즉, 멀티-에이전트 시스템이나 복잡한 AI 파이프라인을 구축할 때 사용됩니다.
> >
> > > LangChain은 일렬로 로직을 실행(체이닝)하는 방식이지만
> > >
> > > LangGraph는 그래프구조/상태관리/병렬실행/조건실행 등의 특징으로 더 복잡한 시스템을 구축할 수 있다.
> > >
> > > > Graph란 AI가 동작해야하는 Workflow를 의미한다.
> > > >
> > > > > 사용자가 여러번 질문을 할 때마다 이전 상태를 기억하고있다가 다음 노드로 이동시킨다.

## install

```sh
npm i langchain
npm i @langchain/core
npm i @langchain/langgraph
npm i @langchain/community

npm i @langchain/openai
```

## Steps

1. Define the State Class
2. Start the Graph Builder
3. Create a Node
4. Create Edges
5. Compile the Graph

## usage

```ts
import { TavilySearchResults } from "@langchain/community/tools/tavily_search";
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, AIMessage } from "@langchain/core/messages";
import { ToolNode } from "@langchain/langgraph/prebuilt";
import { StateGraph, MessagesAnnotation } from "@langchain/langgraph";

// Define the tools for the agent to use
const tools = [new TavilySearchResults({ maxResults: 3 })];
const toolNode = new ToolNode(tools);

// Create a model and give it access to the tools
const model = new ChatOpenAI({
  model: "gpt-4o-mini",
  temperature: 0,
}).bindTools(tools);

/*#### 1. Define State Classes ####*/
// Define the function that determines whether to continue or not
// 계속할지 말지 결정하는 함수 정의
function shouldContinue({ messages }: typeof MessagesAnnotation.State) {
  const lastMessage = messages[messages.length - 1] as AIMessage;

  // If the LLM makes a tool call, then we route to the "tools" node
  // 도구 호출이 있으면 "tools" 노드로 라우팅
  if (lastMessage.tool_calls?.length) {
    return "tools";
  }
  // Otherwise, we stop (reply to the user) using the special "__end__" node
  // 그렇지 않으면 특수한 "__end__" 노드를 사용하여 멈춤
  return "__end__";
}

// Define the function that calls the model
// 모델을 호출하는 함수 정의
async function callModel(state: typeof MessagesAnnotation.State) {
  const response = await model.invoke(state.messages);

  // We return a list, because this will get added to the existing list
  // 기존 목록에 추가되기 때문에 목록을 반환
  return { messages: [response] };
}

/*#### 2. Start the Graph Builder ####*/
// Define a new graph
const workflow = new StateGraph(MessagesAnnotation)
  /*#### 3. Create a Node ####*/
  .addNode("agent", callModel)
  .addNode("tools", toolNode)
  /*#### 4. Create Edges ####*/
  .addEdge("__start__", "agent") // __start__ is a special name for the entrypoint
  .addEdge("tools", "agent")
  .addConditionalEdges("agent", shouldContinue);

/*#### 5. Compile the Graph ####*/
// Finally, we compile it into a LangChain Runnable.
const app = workflow.compile();

// Use the agent
const finalState = await app.invoke({
  messages: [new HumanMessage("what is the weather in sf")],
});
console.log(finalState.messages[finalState.messages.length - 1].content);

const nextState = await app.invoke({
  // Including the messages from the previous run gives the LLM context.
  // This way it knows we're asking about the weather in NY
  messages: [...finalState.messages, new HumanMessage("what about ny")],
});
console.log(nextState.messages[nextState.messages.length - 1].content);
```
