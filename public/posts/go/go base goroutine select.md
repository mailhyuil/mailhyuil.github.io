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
    return
}
```

## done channel pattern

> 지속적으로 채널을 모니터링하는 경우
>
> > for 내부에서 조건을 사용해 break을 걸어줘야 함
> >
> > > done 채널을 사용해 struct{}를 보내면 종료됨
> > >
> > > struct를 사용하는 이유는 struct{}는 크기가 0임, 아무것도 없다고 판단함

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	ch := make(chan string) // 메시지 채널
	done := make(chan struct{}) // 종료 신호 채널

	// 메시지를 보내는 goroutine
	go func() {
		for i := 1; i <= 5; i++ {
			ch <- fmt.Sprintf("메시지 %d", i)
			time.Sleep(500 * time.Millisecond)
		}
		// 메시지 다 보냈으면 done에 신호 보냄
		done <- struct{}{}
	}()

	// 메시지를 받는 쪽
	for {
		select {
		case msg := <-ch:
			fmt.Println("값을 받음:", msg)
		case <-done:
			fmt.Println("더 이상 값이 없을 때까지 대기")
			return
		}
	}
}
```
