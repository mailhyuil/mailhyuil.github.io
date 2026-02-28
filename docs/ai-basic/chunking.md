# ai Chunking 전략 정리

## 1. 개요

Chunking은 긴 문서를 임베딩 및 검색에 적합한 단위로 분할하는 과정이다.  
RAG 시스템에서 검색 품질을 좌우하는 핵심 요소 중 하나이며,  
임베딩 모델 성능보다 더 큰 영향을 미치는 경우도 많다.

Chunking 전략은 다음 요소를 중심으로 설계한다.

- Token 기준 분할
- Overlap 설정
- Sliding Window 방식
- 의미 단위 분할 여부

---

## 2. Token 기준 분할

### 2.1 왜 Token 기준인가

LLM과 임베딩 모델은 token 단위로 입력을 처리한다.  
따라서 글자 수 또는 문장 수가 아닌 token 수를 기준으로 분할하는 것이 바람직하다.

예시:

- 500 ~ 800 tokens: 일반 문서 검색에 적합
- 300 ~ 500 tokens: 세밀한 검색에 적합
- 1000 tokens 이상: 문맥 유지에는 유리하지만 노이즈 증가 가능

### 2.2 Chunk 크기 선택 기준

| 상황 | 권장 크기 |
|------|------------|
| FAQ, 짧은 문서 | 300~500 tokens |
| 일반 문서 검색 | 500~800 tokens |
| 긴 기술 문서 | 700~1000 tokens |

Chunk가 너무 작으면:

- 문맥 손실 발생
- 검색 결과 파편화

Chunk가 너무 크면:

- 불필요한 정보 포함
- LLM 컨텍스트 낭비
- 유사도 정확도 저하

---

## 3. Overlap 전략

### 3.1 Overlap의 목적

문서를 단순 분할하면 경계 부분의 문맥이 잘린다.  
Overlap은 이 문제를 완화하기 위한 중첩 구간이다.

예:

- Chunk size: 600 tokens
- Overlap: 100 tokens

이 경우 각 chunk는 이전 chunk의 마지막 100 tokens를 포함한다.

### 3.2 권장 Overlap 범위

- 일반 문서: 50 ~ 150 tokens
- 기술 문서: 100 ~ 200 tokens

Overlap이 너무 크면:

- 저장 비용 증가
- 중복 검색 증가

Overlap이 너무 작으면:

- 문맥 단절 문제 발생

---

## 4. Sliding Window 방식

Sliding Window는 고정 길이로 일정 간격씩 이동하며 분할하는 방식이다.

예:

- Chunk size: 600
- Step size: 500
→ 100 token overlap 자동 발생

장점:

- 구현 단순
- 균일한 분할 가능

단점:

- 의미 단위 무시 가능성
- 문단 경계와 맞지 않을 수 있음

---

## 5. 의미 기반 Chunking

Token 수만 기준으로 하지 않고,
문단, 제목, 섹션 단위로 분할하는 방식이다.

예:

- Markdown header 기준 분할
- 문단 단위 분할 후 token 제한 적용

장점:

- 검색 정확도 향상
- 의미 단위 유지

단점:

- 구현 복잡도 증가
- 불균등 길이 문제

실무에서는 다음 방식이 많이 사용된다:

1. 문단/섹션 기준 1차 분할
2. token 수 초과 시 sliding window 적용

---

## 6. Chunking과 검색 품질의 관계

Chunking은 다음에 직접적인 영향을 준다:

- Top-k 검색 정확도
- Hallucination 발생률
- 컨텍스트 낭비율
- Reranker 효율

일반적으로:

- 잘 설계된 chunking + 중간급 임베딩

> 부적절한 chunking + 고급 임베딩

---

## 7. 실무 권장 기본 설정

초기 세팅 예시:

- Chunk size: 600~800 tokens
- Overlap: 100 tokens
- 문단 기반 분할 우선
- Top-k: 5~10
- 필요 시 reranker 적용

---

## 8. 결론

Chunking은 RAG 품질의 핵심 요소이다.  
임베딩 모델 교체보다 Chunk 전략 개선이 더 큰 성능 향상을 가져오는 경우가 많다.

최적 전략은 고정된 정답이 존재하지 않으며,
데이터 특성과 검색 목적에 맞춰 실험적으로 조정해야 한다.
