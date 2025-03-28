# js context

> 함수가 호출될 때 생성되는 스택에 생성되는 객체
>
> > 최초 main 함수가 호출될 때 생성되는 전역 컨텍스트와, 그 안에서 호출되는 함수가 있을 경우 그 함수의 컨텍스트가 생성된다.

## 컨텍스트의 구성요소

```md
## Variable Environment(Value Object): 변수 환경 (var, function + arguments)

- 호이스팅된다.
- 함수의 arguments는 arguments 객체에 저장된다.
- 스코프 체인의 영향이 없다.

## Lexical Environment(Scope Chain): 렉시컬 환경 (현재 범위 + 상위 스코프의 정보 + let, const, function)

- 스코프 체인의 영향을 받는다.

## This Binding(This Value): this (this가 가리키는 객체의 정보)

- 컨텍스트의 객체를 가리킨다.
- 화살표 함수 사용 시 this는 상위 스코프를 가리킨다.
- call, apply, bind로 변경 가능
```
