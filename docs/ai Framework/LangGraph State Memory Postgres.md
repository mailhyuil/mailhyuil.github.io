# LangGraph State Memory Library

## install

```sh
npm i @langchain/langgraph-checkpoint-postgres
```

## usage

```ts
import { PostgresSaver } from "@langchain/langgraph-checkpoint-postgres";

const checkpointer = PostgresSaver.fromConnString("postgresql://postgres:postgres@localhost:5432/mydb?sslmode=disable");
await checkpointer.setup(); // 필요한 테이블 초기화

// ... other code ...

await checkpointer.deleteThread(threadId);
```
