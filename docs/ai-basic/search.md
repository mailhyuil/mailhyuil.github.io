# ai search

- dense + sparse -> reranker

## 1) Dense Search만 먼저

 기본 topk 검색

- 목표
“일단 답을 찾긴 한다”를 빠르게 만든다.
구현 체크리스트
Chunking (600~800 tokens, overlap 100 정도로 시작)
Embedding + VectorDB(pgvector 추천)
Top-k = 5~10
Retrieval 결과(문서 제목/스니펫/점수) 로그로 남기기
- 이유
Dense만으로도 70~80점 나오는 케이스가 많고,
여기서 병목이 “모델”이 아니라 chunking/데이터 정리일 때가 대부분임.

## 2) 정확도가 아쉽거나 “비슷한데 틀린 문서”가 자주 뜨면: **Reranker** 추가

- 추가 타이밍 신호
Top-10엔 정답이 있는데 Top-3에 못 올라옴
비슷한 문서들이 서로 순서를 바꿔가며 나옴
hallucination이 늘어남(컨텍스트가 애매해서)
- 구현 방법
Dense로 Top-20 뽑고
Reranker로 Top-5 재정렬
- 비용/성능 팁
rerank는 Top-20 이하로 제한해야 현실적
처음엔 API reranker(있으면) 또는 경량 오픈소스 reranker로

## 3) “키워드/코드/고유명사”가 중요한 도메인이면: Sparse(BM25) 붙이기

- 추가 타이밍 신호
차량모델명/지점명/정확한 용어 검색이 자주 실패
숫자/코드 포함 검색에서 Dense가 헛발질
약관 조항 번호 같은 걸 못 찾음
- 구현 포인트
BM25는 보통 Elastic/OpenSearch가 제일 편함
(작게 시작하면 Meilisearch도 가능)
Top-k 20 정도 뽑아서 Dense와 합치기 준비

## 4) 마지막에 하이브리드(병합)로 완성

- 병합 방식 (현실적으로 제일 쉬운)
BM25 Top-20 + Dense Top-20 합치기
중복 제거
RRF(Reciprocal Rank Fusion) 같은 rank 기반으로 합치기
그 다음 Reranker로 최종 Top-5

## 정석 파이프라인

BM25 후보

Dense 후보

Merge (RRF)

Rerank

LLM 답변
