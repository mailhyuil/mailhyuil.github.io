# 브라우저 Layer

> paint layer(render layer), graphics layer

## gpu 가속을 사용하려면 graphics layer 위에 생성되야함

## Paint Layer중 Compositing Trigger를 가지고 있거나 스크롤 가능한 컨텐츠가 있을 경우 별도의 Graphics Layer가 생성된다.

## composite only property가 아니더라도 레이어를 분리하면 최적화가 된다

## 레이어를 너무 분리해버리면 그에 따른 비용이 발생함
