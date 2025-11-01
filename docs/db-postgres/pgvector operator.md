# pgvector operator

| 목적                | 추천 거리 연산자      | 추천 임베딩 모델                                                                                          | 비고                                                                                             |
| ------------------- | --------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 텍스트 검색 (RAG)   | `<=>` (cosine)        | `text-embedding-3-small`, `text-embedding-3-large` ([openai.com][1])                                      | OpenAI 최신 세대 임베딩 모델. 더 정밀히 하면 `text-embedding-ada-002` ([thenewstack.io][2])      |
| 이미지 feature 검색 | `<->` (L2)            | CLIP 계열 또는 멀티모달 임베딩 모델 (예: OpenAI/CLIP-기반) ([developers.llamaindex.ai][3])                | OpenAI가 명시적으로 “image-embedding” 모델명 다 안 냈음 → CLIP-기반 또는 멀티모달 모델 사용 권장 |
| 추천 시스템         | `<#>` (inner product) | 텍스트 임베딩 동일 모델(`text-embedding-3-small` 등) 또는 유저-아이템 특화 임베딩 모델                    | 추천 시스템이라 유저-아이템 별도 학습 모델이라면 맞춤 모델이 더 좋음                             |
| IoT/센서/수치 신호  | `<+>` (L1)            | 텍스트 임베딩 모델이 아닌 수치 데이터 특화 벡터화 + 표준화된 벡터 모델                                    | 임베딩 모델보다는 자체 feature engineering + 벡터화가 중요                                       |
| 해시/Fingerprint    | `<~>` (Hamming)       | 비트플래그/해시 기반 벡터(텍스트 임베딩 모델이 아님)                                                      | 임베딩 모델이라기보다는 해시 생성 모델 또는 LSH 방식                                             |
| 관심사/태그 매칭    | `<%>` (Jaccard)       | 텍스트 임베딩 모델보다는 태그 기반 벡터화 모델 또는 텍스트 임베딩 모델을 태그 텍스트로 변환해서 사용 가능 | 태그/속성 벡터화 + metadata 병행이 효과적                                                        |

[1]: https://openai.com/index/new-embedding-models-and-api-updates/?utm_source=chatgpt.com "New embedding models and API updates - OpenAI"
[2]: https://thenewstack.io/beginners-guide-to-openai-text-embedding-models/?utm_source=chatgpt.com "OpenAI Text Embedding Models: A Beginner's Guide - The New Stack"
[3]: https://developers.llamaindex.ai/python/examples/multi_modal/image_to_image_retrieval/?utm_source=chatgpt.com "Image to Image Retrieval using CLIP embedding and ..."

## INSERT

```sql
INSERT INTO users (embedding) VALUES ('[0.1, 0.2, 0.3, ..., 0.9]');
```

## SELECT

```sql
-- <-> (L2(유클리드) 거리): 값이 작을수록 유사 (두 벡터 사이의 직선 거리)
-- 이미지 검색, 공간 기반 추천, 벡터 크기와 방향 모두 고려
SELECT * FROM users ORDER BY embedding <-> '[0.1, 0.2, 0.3, ..., 0.9]' LIMIT 5;
-- <=> (코사인 거리): 값이 작을수록 유사 (두 벡터의 방향(각도)을 기반으로 유사도를 측정)
-- 문서 검색, NLP, 추천 시스템 (벡터 방향이 중요한 경우)
SELECT * FROM users ORDER BY embedding <=> '[0.1, 0.2, 0.3, ..., 0.9]' LIMIT 5;
-- <#> (내적): 값이 클수록 유사 (두 벡터의 크기와 방향을 고려하여 계산하는 값.)
-- 검색 랭킹, 추천 시스템, 벡터 크기가 중요한 경우
SELECT * FROM users ORDER BY embedding <#> '[0.1, 0.2, 0.3, ..., 0.9]' LIMIT 5;
```

## INDEX

```sql
-- HNSW(계층적 탐색 가능한 작은 세계)
CREATE INDEX ON users USING hnsw (embedding);
-- DiskANN(DiskANN) 근사한 인접 디스크
CREATE INDEX ON users USING diskann (embedding);
```
