# ai base MCP (Model Context Protocol)

> OpenAI에서 제안한 "모델에게 문맥(Context)을 체계적으로 전달하는 표준" 을 만들기 위한 프로토콜

## 기존 문제점

```txt
LLM에 정보를 줄 때마다 매번 프롬프트에 다 집어넣음
긴 텍스트 많아지면 context window 꽉 차서 잘림
중복된 정보 전달, 비효율, 무의미한 토큰 낭비 발생
```

## MCP

```txt
컨텍스트를 모듈화해서 모델에게 "필요한 정보"만 정리해서 줌
문맥을 structured하게, 체계적으로 관리함
```

```json
{
  "name": "UserContext",
  "data": {
    "goals": ["learn TypeScript", "build a portfolio"],
    "preferences": { "tone": "casual", "language": "Korean" },
    "history": [...],
    "documents": [...]
  }
}
```
