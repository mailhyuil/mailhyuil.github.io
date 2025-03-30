# langchain Messages

## SystemMessage

> AI에게 개발자가 명령을 내리기 위해서 사용하는 메시지
>
> > e.g. 여행가이드 역할을 하며, 여행에 관련되지 않은 질문은 답변하지 말아라

## HumanMessage (User)

> 사용자의 질문
>
> > e.g. 광주 주변의 관광지를 추천해줘

## AiMessage (Assistant)

> AI의 답변 내용

## ChatMessageHistory

> 사용자와 AI간의 대화 내역
>
> > AiMessage와 HumanMessage의 배열

```json
[
  ["assistant", "..."],
  ["user", "..."],
  ["assistant", "..."],
  ["user", "..."]
]
```
