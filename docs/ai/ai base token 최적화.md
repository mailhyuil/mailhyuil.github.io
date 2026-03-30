# ai base token 최적화

캐시 키가 일치하면 Context Caching을 적용해 비용을 아끼고,  
평가 점수가 낮은 작업은 데이터를 모아 Unsloth로 튜닝하여  
결과적으로 프롬프트 길이를 줄여나가는 것이 AI SaaS의 완성형 파이프라인입니다.

```txt
Context Caching
비용 절감 & 속도 (일반 input token보다 비요이 저렴함)
시스템 프롬프트나 참고 문서가 매우 길 때

Model Routing
전체 예산 최적화 (높은 비용의 모델이 필요할 때만 사용)
작업의 난이도가 다양할 때 (Harness 필수)

Fine-tuning
정확도 & 토큰 압축 (모델이 스스로 학습하여 프롬프트 길이를 줄임)
특정 형식의 결과물을 반복적으로 뽑아야 할 때

Input Cleaning
잔여 토큰 제거
HTML/JSON 등 불필요한 태그가 많을 때
```
