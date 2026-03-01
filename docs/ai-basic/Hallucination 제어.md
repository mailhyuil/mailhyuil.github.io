# ai Hallucination 제어

## 출처 명시하기

1. 답변에 항상 출처(문서 제목/섹션/링크/청크ID) 붙이게 함
2. 컨텍스트에 없는 내용이면:  
   > “제공된 문서에서 확인 불가”로 "거절/보류" 또는 “추가 정보 요청”

## Confidence 게이트(임계치) 두기

- Dense 유사도나 reranker 점수 기반으로
- top1_score < threshold면 답변 안 함 / 추가 질문
- th reshold는 로그 쌓아서 맞춤 (처음엔 대충 시작)
