
# ai base Harness

## 1. AI SaaS의 전체 구조: Harness의 위치

Harness는 특정 서버나 테스트 코드가 아닙니다.  
**실행 흐름(Runtime) 사이에 삽입되어 판단과 제어를 담당하는 로직**입니다.

### 전체 아키텍처 맵

```text
Client (사용자)
    ↓
Nginx (리버스 프록시)
    ↓
FastAPI (API 레이어 - 입구)
    ↓
Orchestrator (전체 흐름 제어 - 지휘자)
    ↓
🔥 Harness Layer (판단 + 제어 - 두뇌) ⭐⭐⭐
    - Router / Evaluator / Retry / Filter / Guardrail
    ↓
Model Providers (LLM 엔진)
    ↓
(결과를 다시 Harness로 전달)
    ↓
Response (최종 응답)
```

## 2. Harness의 양방향 구조 (Before & After)

Harness는 모델 호출 전(Before)과 후(After)에 걸쳐 전방위적으로 작동합니다.

### 🔄 양방향 제어 흐름

1. **Before (전처리):** `Prompt` → `Router` → `Model`
   * **질문에 최적화된 모델 선택:** 비용과 성능을 고려하여 GPT-4를 쓸지, Gemini Flash를 쓸지 결정합니다.
2. **After (후처리):** `Response` → `Evaluator` → `Filter` → `Retry`
   * **결과 검증:** 모델의 답변이 기준 점수 미달이면 필터링하거나, 다시 시도(Retry)합니다.

## 3. 코드 레벨에서의 Harness 위치

실제 프로젝트 구조에서 Harness는 다음과 같이 독립된 모듈로 존재하며, 오케스트레이터에 의해 호출됩니다.

### 디렉토리 구조 예시

```bash
app/
├── main.py            # API 엔트리 포인트
├── orchestrator.py    # 전체 파이프라인 흐름 제어
├── harness/           # ⭐ 핵심 로직
│   ├── router.py      # 모델 라우팅 정책
│   ├── evaluator.py   # 응답 품질 평가
│   ├── retry.py       # 재시도 로직
│   └── filters.py     # 유해 콘텐츠 및 형식 필터링
└── models/            # 각 LLM 프로바이더 연동
```

### 파이프라인 실행 로직 (Pseudo Code)

```python
async def run_ai_pipeline(prompt):
    # 1. 모델 선택 (Harness - Before)
    model = router.select_model(prompt)

    # 2. 모델 실행 (Engine)
    result = await model.generate(prompt)

    # 3. 품질 평가 (Harness - After)
    score = evaluator.evaluate(result)

    # 4. 필터링 및 재시도 판단
    if score < 0.7:
        result = await retry.handle(prompt, model)

    return result
```

## 4. Redis: Harness의 성능을 극대화하는 보조 장치

Harness 레이어 밑에 Redis를 두면 훨씬 지능적인 제어가 가능해집니다.

* **캐싱(Caching):** 동일한 질문에 대한 고품질 답변을 즉시 반환하여 비용 절감.
* **상태 저장:** 사용자별 대화 맥락과 리트라이 히스토리 관리.
* **Score 기록:** 모델별 평가 점수를 누적 기록하여 향후 라우팅 지표로 활용.

## 5. 결론: 왜 Harness가 중요한가?

Harness가 없는 서비스는 단순한 **"LLM Wrapper"**에 불과합니다. 반면, Harness가 잘 설계된 서비스는 다음과 같은 가치를 제공합니다.

> **1. 품질 제어:** 저품질 응답을 사용자에게 내보내지 않음
> **2. 비용 제어:** 작업 난이도에 따라 저렴한 모델과 고성능 모델을 적절히 배분
> **3. 사용자 맞춤:** 과거 데이터와 평가 점수를 기반으로 최적화된 경험 제공

🔥 **최종 결론:**
Harness는 특정 위치에 고정된 서버가 아니라, **"AI 실행 흐름을 감싸는 지능형 제어 레이어"** 그 자체입니다. 진정한 AI SaaS를 설계하고 싶다면, 모델(엔진)보다 Harness(두뇌) 설계에 더 많은 공을 들여야 합니다.
