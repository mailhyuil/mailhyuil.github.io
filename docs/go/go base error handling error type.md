# go type error

> error는 built-in interface이다.

## error interface

```go
type error interface {
    Error() string
}
```

## type 비교

> instanceof와 같이 타입을 비교할 수 있다.

```go
err := fmt.Errorf("connect failed: %w", io.EOF)

if errors.Is(err, io.EOF) {
    fmt.Println("EOF 에러다!")
}
```

## error wrapping

> 에러를 다른 에러로 감싸는 방법
>
> > errors.Unwrap으로 감싼 에러를 꺼낼 수 있다.

```go
err := fmt.Errorf("connect failed: %w", io.EOF)
if errors.Is(err, io.EOF) {
    fmt.Println("EOF 에러다!")
}

// unwrap
err = errors.Unwrap(err)
```
