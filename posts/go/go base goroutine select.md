# go base conditional select

> goroutine에서 주로 사용하는 분기문
>
> > Go의 채널(Channel)에서 발생하는 여러 I/O 중, 준비된(ready) 작업 하나를 "랜덤하게" 선택해서 실행하는 제어문

```go
select {
case msg := <-ch1:
    fmt.Println("ch1에서 받은 값:", msg)

case ch2 <- "ping":
    fmt.Println("ch2로 값 보냄")

default:
    fmt.Println("아무것도 준비 안 됨")
}
```

## timeout pattern

> 2초 안에 메세지가 안오면 타임아웃 처리

```go
select {
case msg := <-ch:
    fmt.Println("받은 값:", msg)
case <-time.After(2 * time.Second):
    fmt.Println("타임아웃!")
}
```

## for-select 문

> 지속적으로 채널을 모니터링하는 경우

```go
for {
    select {
    case msg := <-ch:
        fmt.Println("받음:", msg)
    case <-done:
        fmt.Println("끝!")
        return
    }
}
```
