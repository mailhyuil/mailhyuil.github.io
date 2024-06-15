# compilation stages

> 5 stages of compilation

## parser

> scanner와 parser가 합쳐진 단계로, 소스코드를 토큰으로 나누고 AST를 생성한다.
>
> > parser는 source code를 가져와서 in-memory AST representation을 생성한다. (이것을 compiler가 사용한다.)
> >
> > > scanner는 parser에 의해 사용되는 것으로 string을 token으로 변환한다.

```sh
SourceCode ~~ scanner ~~> Token Stream ~~ parser ~~> AST
```

## binder

> symbol map을 생성하고 AST를 사용하여 type system을 제공한다.
>
> > 이 type system은 node들을 연결하는데 사용된다.

## checker

## transformer

> 개발자가 개입을 할 수 있는 단계, 성능 최적화, compile time 단축, 코드 변경 등등의 작업을 할 수 있다. (ex. plugin)
>
> > before, after, afterDeclarations 세 가지 단계로 나뉜다.

```sh
before : code가 compile되기 전
after : code가 compile된 후
afterDeclarations : 타입이 선언된 후 (type defs를 변환할 수 있다.)
```

## emitter

> AST를 가져와서 output을 생성한다.
