# langchain respond Classification & Extract Structured Output

> 텍스트를 카테고리나 라벨등으로 변환, 텍스트에서 데이터를 추출하는 작업
>
> > 일반 json을 제공하거나 zod를 통한 스키마, JSONSchema object를 제공하는 방법이 있다.
> >
> > > openai등의 llm대신 lightweight classifier를 사용하여 분류 작업을 수행할 수 있다.

## usage

```ts
// Define schema
const schema = { foo: "bar" };
// Bind schema to model
const modelWithStructure = model.withStructuredOutput(schema);
// Invoke the model to produce structured output that matches the schema
const structuredOutput = await modelWithStructure.invoke(userInput);
```
