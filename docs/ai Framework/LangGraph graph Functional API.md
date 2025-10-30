# LangGraph graph Functional API

> 일반 Graph API 보다 제한적이지만 더 간단한 방식으로 사용할 수 있다.

## usage

```ts
import { v4 as uuidv4 } from "uuid";
import { MemorySaver, entrypoint, task, interrupt } from "@langchain/langgraph";

const writeEssay = task("writeEssay", async (topic: string) => {
  // This is a placeholder for a long-running task.
  await new Promise(resolve => setTimeout(resolve, 1000));
  return `An essay about topic: ${topic}`;
});

const workflow = entrypoint({ checkpointer: new MemorySaver(), name: "workflow" }, async (topic: string) => {
  const essay = await writeEssay(topic);
  const isApproved = interrupt({
    // Any json-serializable payload provided to interrupt as argument.
    // It will be surfaced on the client side as an Interrupt when streaming data
    // from the workflow.
    essay, // The essay we want reviewed.
    // We can add any additional information that we need.
    // For example, introduce a key called "action" with some instructions.
    action: "Please approve/reject the essay",
  });

  return {
    essay, // The essay that was generated
    isApproved, // Response from HIL
  };
});

const threadId = uuidv4();

const config = {
  configurable: {
    thread_id: threadId,
  },
};

for await (const item of workflow.stream("cat", config)) {
  console.log(item);
}
```
