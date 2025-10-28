# langchain Tool example input data

## input-data.ts

```ts
import { tool } from "@langchain/core/tools";
import { stdin, stdout } from "node:process";
import { createInterface } from "readline";
import z from "zod";

const rl = createInterface({ input: stdin, output: stdout });

const ask = (q: string): Promise<string> => new Promise(resolve => rl.question(q, resolve));

const inputDataOutput = z.object({
  name: z.string(),
  email: z.string(),
  message: z.string(),
});

async function inputData() {
  const name = await ask("📝 name: ");
  const email = await ask("📧 email: ");
  const message = await ask("📝 message: ");
  rl.close();
  return { name, email, message };
}

export const inputDataTool = tool(inputData, {
  name: "input-data-tool",
  description: "Ask the user for name, email, and message",
  schema: inputDataOutput,
});
```
