# ai base Prompt Engineering & PEFT & RAG

## 프롬프트 엔지니어링

> Prompt Engineering은 LLM에게 ‘좋은 질문’을 만들어 주는 모든 방법

```txt
먼저 직업과 할일을 정해주는겁니다. 그리고 활용할 수 있는 정보, 예를 들면 과거 EV6 판매량을 알려주고요. 전기차 판매량은 월 별로 어떠한 특성을 갖는지 설명해주는겁니다. 이러한 정보는 실제 전기차 판매량을 예측하는 일을 하는 전문가들이 활용하는 지식과 노하우들에 해당할텐데요. Prompt에 이렇게 외부 지식과 정보를 추가해줌으로써 LLM은 단순한 언어 모델을 넘어 실제 전기차 판매량 예측 전문가처럼 예측을 할 수 있게 됩니다.
```

### Prompt Engineering 기법

```txt
Few-shot prompting	예제 몇 개를 주고 패턴을 학습시킴
Zero-shot prompting	별다른 예제 없이 AI가 자체적으로 판단하게 함
Chain-of-thought (CoT)	AI가 논리적으로 생각하며 답을 도출하도록 유도
Self-consistency	여러 답변을 생성 후, 가장 일관성 있는 답을 선택
ReAct (Reasoning + Acting)	AI가 답을 생성하면서 검색 같은 액션을 수행하게 만듦
```

## PEFT (Parameter-Efficient Fine-Tuning)

> 파인튜닝 방식
>
> > 모델의 파라미터(가중치..)를 미세하게 조정하여 특정 작업에 맞게 학습
> >
> > > LoRA 기법

## RAG (Retrieval Augmented Generation)

> 내 질문에 대해 외부 데이터로부터 적절한 정보를 ‘검색’해서 대답에 활용하는 것이 RAG의 골자입니다.
>
> > LLM이 답변을 생성할 때, 검색된 문서를 기반으로 답변을 생성하는 기법
