# LangGraph graph Runtime Context

> 한번 run할 때 유지되는 컨텍스트, configurable과 다르게 한번 run이 끝나면 초기화된다. (configurable은 thread_id만 있다면 계속 유지된다.)
>
> > StateGraph 두번째 인자로 ContextSchema를 전달하여 런타임 컨텍스트를 정의할 수 있다.
> >
> > > Nodes, Tools, 미들웨어에서 두번째 매개변수로 접근 가능

```ts
import { Annotation } from "@langchain/langgraph";

const ContextSchema = Annotation.Root({
    model_name: Annotation<string>,
    system_prompt:
});

const builder = new StateGraph(AgentState, ContextSchema)

function callModel(state: State, runtime: Runtime[ContextSchema]) {
  const messages = state.messages;
  const model = _getModel(runtime.context.model_name ?? "anthropic");
  const response = model.invoke(messages);
  // We return a list, because this will get added to the existing list
  return { messages: [response] };
}
```
