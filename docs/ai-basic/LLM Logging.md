# ai LLM Logging

## prompt versioning

프롬프트 바꾸면:
답변 톤 바뀜
hallucination 패턴 바뀜
비용/토큰 사용량 바뀜
버전 관리 안 하면?
→ “왜 갑자기 품질 떨어졌지?” 추적 불가.
prompt_version: v1.3.2 같은 메타 저장

```json
{
  "prompt_version": "legal-v2.1",
  "model": "gpt-4o",
  "temperature": 0.2
}
```

# token cost tracking

token 사용량 추적
LLM은 토큰 기반 과금.
요청별:
input_tokens
output_tokens
cost
유저별 누적 토큰 추적
월간/일간 제한

```json
{
  "user_id": 123,
  "input_tokens": 3200,
  "output_tokens": 800,
  "estimated_cost": 0.0024
}
```

## 그외

prompt_version

model

temperature

input_tokens

output_tokens

latency

response

error_code

user_id

retrieved_docs (RAG면)
