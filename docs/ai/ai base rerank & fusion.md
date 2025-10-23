# ai base rerank & fusion

> vector store에서 retrieval된 결과를 더 정확하고 관련성 높은 순서로 재정렬하는 기술 방법론
>
> > 이 기법을 사용하면 기본적인 벡터 검색보다 더 정밀한 결과를 얻을 수 있습니다.

1. 1차 검색 (Initial Retrieval) → 유사성 검색을 통해 문서 후보를 가져옴.
2. Re-ranking (재정렬) → 더 정교한 모델을 사용하여 순위를 다시 매김.
3. Fusion (결과 융합) → 여러 검색 기법의 결과를 결합하여 최종 결과를 결정.

## rerank

> 기본 검색 결과의 순서를 개선하는 모델

## fusion

> 여러 retriever의 결과를 결합하여 최종 결과를 도출하는 방법
