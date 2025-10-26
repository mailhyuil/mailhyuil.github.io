# ai AI Framework base Evaluation ROUGH & BLEU

## ROUGE (Recall-Oriented Understudy for Gisting Evaluation)

> 텍스트 요약 및 기계 번역의 품질을 평가하는 메트릭

- 참조 텍스트(Reference)와 생성된 텍스트(Generated)를 비교하여 평가
- n-gram 기반으로 단어/구문의 중복을 측정
- Recall, Precision, F1-score를 계산
- 주로 텍스트 요약 태스크에서 사용됨

### ROUGE 종류

- ROUGE-N: n-gram 기반 중복 측정 (ROUGE-1, ROUGE-2 등)
- ROUGE-L: 최장 공통 부분수열(LCS) 기반
- ROUGE-S: Skip-bigram 기반
- ROUGE-W: 가중치가 부여된 LCS 기반

## BLEU (Bilingual Evaluation Understudy)

> 기계 번역의 품질을 평가하는 메트릭

- 참조 번역(Reference)과 기계 번역(Candidate)을 비교하여 평가
- n-gram precision을 기반으로 계산
- 0~1 사이의 점수 (높을수록 좋음)
- 주로 기계 번역 태스크에서 사용됨

### BLEU 특징

- n-gram precision 계산 (보통 1~4-gram 사용)
- Brevity Penalty 적용 (너무 짧은 번역 패널티)
- 여러 참조 번역 사용 가능
- 언어에 독립적인 평가 가능
