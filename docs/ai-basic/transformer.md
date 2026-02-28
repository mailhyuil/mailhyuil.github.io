# ai transformer

LLM의 엔진
문장을 순서대로 읽는 게 아니라, 한 번에 전체를 보고 관계를 계산한다
Transformer는 병렬 처리 + Attention으로 관계를 잡음.

## attention

단어가 다른 단어를 얼마나 참고해야 하는지 계산.

## self-attention

문장 안의 모든 토큰이
다른 모든 토큰을 참조 가능.

## Tokenization

LLM은 문장을 바로 이해 안 함.
→ 토큰 단위로 쪼갬

대표적인 방식이 BPE (Byte Pair Encoding).

## Temperature / Top-p

“얼마나 랜덤하게 할지”
Temperature: 0이면 완전 결정론적, 1이면 완전 랜덤
Top-p: 랜덤 토큰 중 상위 p%만 선택
