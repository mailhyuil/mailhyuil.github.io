# ai base prompt few shot vs zero shot vs one shot

## Few-Shot Prompting

> 인공지능 학습에서 샷(Shot)은 예시(Example)를 뜻합니다. 따라서 퓨샷(Few-Shot)은 몇가지 예시(Few examples)를 뜻합니다.
>
> > 퓨샷 프롬프팅은 AI 모델이 새로운 작업을 수행할 때 소량의 예시를 제공하여, 모델이 해당 작업을 더 정확하게 이해하고 수행하도록 돕는 방법을 뜻합니다.

```txt
아래 문장을 한국어로 번역하세요.

예시:
1. 영어: "How are you?"
   한국어: "어떻게 지내세요?"
2. 영어: "What is your name?"
   한국어: "당신의 이름은 무엇인가요?"

### 번역할 문장
영어: "I am learning Few-Shot prompting"
```

## Zero-Shot Prompting

> 추가적인 학습 없이 새로운 데이터에 대한 예측을 수행
>
> > 많은 양의 라벨링 된 데이터를 사용해야함

## One-Shot Prompting

> 한정된 양의 데이터로 새로운 데이터에 대한 예측을 수행
