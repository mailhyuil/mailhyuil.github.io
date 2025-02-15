# langchain Structured Output

> AI의 응답을 정해진 구조로 변환하는 방법
>
> > 일반 json을 제공하거나 zod를 통한 스키마, JSONSchema object를 제공하는 방법이 있다.

## usage

```ts
// Define schema
const schema = { foo: "bar" };
// Bind schema to model
const modelWithStructure = model.withStructuredOutput(schema);
// Invoke the model to produce structured output that matches the schema
const structuredOutput = await modelWithStructure.invoke(userInput);
```
