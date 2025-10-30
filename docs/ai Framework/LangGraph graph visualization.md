# LangGraph graph visualization

```ts
import * as fs from "node:fs/promises";

async function visualization(graph: CompiledStateGraph<any, any, any>) {
  const drawableGraph = await graph.getGraphAsync();
  const image = await drawableGraph.drawMermaidPng();
  const imageBuffer = new Uint8Array(await image.arrayBuffer());
  await fs.writeFile("graph.png", imageBuffer);
}

const graph = workflow.compile();

await visualization(graph);
```
