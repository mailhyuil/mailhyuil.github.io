# ai 임베딩 모델 정리

## 1. 개요

본 문서는 2026년 기준 RAG(Retrieval-Augmented Generation) 및 벡터 검색 시스템에서 실무적으로 활용도가 높은 임베딩 모델을 정리한 자료이다.  
연구용 모델이 아닌, 실제 서비스 설계 관점에서 고려할 모델 위주로 기술한다.

---

## 2. 상용 임베딩 모델

### 2.1 OpenAI - text-embedding-3 시리즈

#### text-embedding-3-small

- Dimension: 1536
- 특징:
  - 비용 대비 안정적인 성능
  - MVP 및 초기 서비스에 적합
  - 한국어 성능 무난
- 장점:
  - API 기반으로 운영 편의성 높음
  - 별도 인프라 관리 불필요
- 단점:
  - 사용량 기반 비용 발생

#### text-embedding-3-large

- Dimension: 3072
- 특징:
  - 고정밀 검색 환경에 적합
  - small 대비 표현력 향상
- 단점:
  - 비용 증가
  - 벡터 저장 비용 증가

---

## 3. 오픈소스 임베딩 모델

### 3.1 BGE (BAAI General Embedding)

- 제공: BAAI
- 대표 모델:
  - bge-base
  - bge-large
  - bge-m3

#### bge-m3 특징

- 멀티언어 지원
- Dense + Sparse + Multi-vector 지원
- 하이브리드 검색 구조에 적합
- Reranker 모델 제공 (bge-reranker)

장점:

- RAG 최적화 설계
- 비용 없음 (자체 운영 시)

단점:

- 모델 서빙 인프라 필요
- 운영 난이도 존재

---

### 3.2 E5 (Microsoft)

- 대표 모델:
  - multilingual-e5-base
  - multilingual-e5-large

특징:

- Query / Passage 구분 학습
- 검색 벤치마크 우수
- 한국어 성능 양호

입력 형식 예시:

- query: 사용자 질문
- passage: 문서 내용

장점:

- 검색 특화 구조
- 오픈소스

단점:

- 입력 포맷을 명확히 지켜야 성능 확보 가능

---

### 3.3 GTE (Alibaba)

- 대표 모델:
  - gte-base
  - gte-large

특징:

- 비교적 경량
- 빠른 추론 속도
- 실사용 적합한 성능

---

### 3.4 Jina Embeddings

- 대표 모델:
  - jina-embeddings-v3

특징:

- 긴 문맥 처리에 강점
- 문서 검색 성능 우수
- 일부 멀티모달 지원

---

## 4. 기타 상용 모델

### 4.1 Cohere Embed

- 엔터프라이즈 환경에서 활용 사례 다수
- API 기반 사용
- RAG 친화적 설계

### 4.2 Voyage AI

- 고성능 상용 임베딩
- 긴 컨텍스트 처리 강점
- 최근 스타트업 환경에서 채택 증가

---

## 5. 선택 기준

임베딩 모델 선택 시 다음 요소를 고려한다.

1. 검색 품질 (Top-k 정확도, Recall)
2. 한국어 및 멀티언어 지원 여부
3. 속도 (추론 지연 시간)
4. 비용 (API 비용, 벡터 저장 비용)
5. 인프라 운영 가능 여부
6. Hybrid search 및 Reranker 적용 여부

---

## 6. 목적별 추천

| 목적 | 추천 모델 |
|------|------------|
| MVP | OpenAI text-embedding-3-small |
| 비용 최소화 | bge-base |
| 한국어 중심 문서 | bge-m3 / multilingual-e5 |
| 고정밀 검색 | OpenAI large / Voyage |
| Hybrid 검색 구조 | bge-m3 |

---

## 7. 결론

단일 임베딩 모델만으로 모든 문제를 해결하기는 어렵다.  
최근 실무에서는 다음 구조가 일반적이다.

- Dense Embedding + Reranker
또는
- Hybrid Search (BM25 + Vector) + Reranker

임베딩 모델 자체의 성능뿐 아니라,
Chunking 전략, Retrieval 방식, Reranking 구조가 전체 검색 품질에 더 큰 영향을 미친다.
