# LangGraph State Annotation

> langchain 1.x 버전부터 zod로 대체 가능!
>
> > Workflow에서 상태를 관리하는 객체
> >
> > > 입력/출력 값을 검증하여 일관된 데이터 흐름을 유지
> > >
> > > > Graph 실행 중 상태를 추적하고 유지할 수 있도록 도움
> > > >
> > > > > checkpointer를 사용하여 상태를 저장하고 재개할 수 있도록 도움

## MessagesAnnotation (built-in annotation)

```ts
import { MessagesAnnotation } from "@langchain/langgraph";
/*
typeof MessagesAnnotation.State
===
StateType<{
    messages: BinaryOperatorAggregate<BaseMessage<MessageStructure, MessageType>[], Messages>;
}>
===
{
    messages: []
}
*/
```

## Custom Annotation

> Annotation.Root가 Annotation values를 래핑하는 형태

```ts
import { Annotation, MessagesAnnotation } from "@langchain/langgraph";

const StateAnnotation = Annotation.Root({
  ...MessagesAnnotation.spec,
  id: Annotation<string>({
    reducer: (state, value) => value,
    default: () => "",
  }),
});
```
