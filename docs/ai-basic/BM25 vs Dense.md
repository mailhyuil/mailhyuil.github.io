# ai BM25 vs Dense

## BM25

BM25는 검색 엔진에서 문서의 중요도를 계산하는 알고리즘이다.  
Elasticsearch, Apache Solr등에서 사용되는 기본 알고리즘이다.

- 키워드 정확도
- top-k 검색

## Dense

Embedding 결과를 벡터DB에 저장 후 검색하는 것  

- 의미 유사도
- top-k 검색
