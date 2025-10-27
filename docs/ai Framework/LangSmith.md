# LangSmith

> langchain 애플리케이션의 로깅, 디버깅, 모니터링, 평가 및 테스트를 위한 인터페이스
>
> > langsmith가 설치되어 있다면 환경변수 `LANGSMITH_TRACING=true` 설정 시 자동으로 로깅된다. (별도의 코드 작성 없이)
> >
> > framework를 사용하고 있지 않다면 `traceable`을 사용하여 로깅을 할 수 있다.

## install

```sh
npm i langchain
npm i @langchain/core
npm i @langchain/openai

npm i langsmith
```

## .env

```sh
LANGSMITH_TRACING=true
LANGSMITH_ENDPOINT=https://api.smith.langchain.com
LANGSMITH_API_KEY=
LANGSMITH_PROJECT= # Optional (없으면 default 프로젝트 사용)
LANGSMITH_WORKSPACE_ID= # Optional (org-scoped를 사용 시 필요)

OPENAI_API_KEY=your-openai-api-key
```

## Trace Manually

```ts
import { traceable } from "langsmith/traceable";

const formatPrompt = traceable(
  subject => {
    // Add formatting logic here
  },
  { name: "formatPrompt" },
);

const invokeLLM = traceable(
  async messages => {
    // Add LLM request logic here
  },
  { run_type: "llm", name: "invokeLLM" },
);

const parseOutput = traceable(
  response => {
    // Add parsing logic here
  },
  { name: "parseOutput" },
);

const runPipeline = traceable(
  async () => {
    const messages = await formatPrompt("foo");
    const response = await invokeLLM(messages);
    return parseOutput(response);
  },
  { name: "runPipeline" },
);
```
