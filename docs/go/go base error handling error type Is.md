# go base error handling error type Is

> instanceof와 같이 타입을 비교할 수 있다.

```go
err := fmt.Errorf("connect failed: %w", io.EOF)

if errors.Is(err, io.EOF) {
    fmt.Println("EOF 에러다!")
}
```
