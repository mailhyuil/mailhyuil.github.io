# go base panic() & recover()

> panic()은 프로그램을 강제로 종료시키는 함수이다. 주로 예외 상황에서 사용된다.
>
> > recover()는 panic()으로 종료된 프로그램을 복구하는 함수이다. 주로 defer와 함께 사용된다.

```go
func riskyOperation() {
    defer func() {
        if err := recover(); err != nil {
            fmt.Println("Recovered from:", err)
        }
    }()
    panic("이거 터짐") // 💥
}

func main() {
    riskyOperation()
    fmt.Println("계속 실행됨") // 복구 덕분에 이 줄 실행됨
}
```
