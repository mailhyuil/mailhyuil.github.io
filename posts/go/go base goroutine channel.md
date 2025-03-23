# go base goroutine channel

> channel을 이용하여 goroutine 간 통신을 할 수 있다.
>
> > main에 생성된 channel로 각각의 goroutine이 값을 전달하고, main에서 값을 받아 처리한다.
> >
> > > "<- ch"는 blocking operation이다. (따라서 main함수가 종료되지 않고 기다린다.)

## 문법

```go
// channel 생성
ch := make(chan string)
// send only channel 생성
ch := make(chan <- string)

// 함수에서 channel로 값을 전달 (send)
ch <- "hello"

// main에서 channel로 값을 받아 처리 (receive)
msg := <- ch

// channel을 닫을 때 (for range, ok check 시 필요)
close(ch)

// channel의 길이 확인
len(ch)
```

## usage

```go
package main

import (
	"fmt"
	"time"
)

func main(){
    // channel 생성
    ch := make(chan string)

    people := []string{"SB", "Hyuil"}

    for _, person := range people {
        go isHot(person, ch)
    }

	for range people {
        msg := <- ch
		fmt.Println(msg)
	}
}

func isHot(person string, ch chan <- string){
    time.Sleep(2 * time.Second)
    ch <- person + " is hot"
}
```
