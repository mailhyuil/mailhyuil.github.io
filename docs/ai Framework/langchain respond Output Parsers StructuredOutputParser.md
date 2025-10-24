# langchain respond Output Parsers StructuredOutputParser

```ts
import { z } from "zod";
import { StructuredOutputParser } from "langchain/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";

let personSchema = z
  .object({
    name: z.optional(z.string()).describe("The name of the person"),
    hair_color: z.optional(z.string()).describe("The color of the person's hair, if known"),
    height_in_meters: z.optional(z.string()).describe("Height measured in meters"),
  })
  .describe("Information about a person.");

const parser = StructuredOutputParser.fromZodSchema(personSchema);

const prompt = ChatPromptTemplate.fromMessages([
  ["system", "Answer the user query. Wrap the output in `json` tags\n{format_instructions}"],
  ["human", "{query}"],
]);

const partialedPrompt = await prompt.partial({
  format_instructions: parser.getFormatInstructions(),
});
```
