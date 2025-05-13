# go type error wrapping

> 에러를 다른 에러로 감싸는 방법
>
> > errors.Unwrap으로 감싼 에러를 꺼낼 수 있다.

## Wrap

```go
err := fmt.Errorf("connect failed: %w", io.EOF)
if errors.Is(err, io.EOF) {
    fmt.Println("EOF 에러다!")
}
```

## Unwrap

```go
err = errors.Unwrap(err)
```

## As

> 중첩해서 wrap된 에러를 타입이 나올 때까지 Unwrap하고 변환해준다.
>
> > Unwrap과 Is의 조합

```go
var err MyError
if errors.As(wrapped, &err) { // MyError 타입이 나올 때까지 Unwrap 후 찾으면 변환
	fmt.Println("커스텀 에러 발견!", myErr.Code, myErr.Msg)
}
```
