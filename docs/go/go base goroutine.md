# go base goroutine

> Go 언어에서 사용되는 경량 스레드(lightweight thread)
>
> > go에서는 goroutine을 사용하여 동시성을 구현할 수 있다. (multi-threading)
> >
> > > goroutine은 main 함수가 종료되면 같이 종료된다.
> > >
> > > > goroutine내에서 변경한 값을 리턴하기 위해서는 channel 또는 pointer를 써야한다.
> > > >
> > > > > \<- ch이 호출된 경우 ch에 값이 들어올 때까지 blocking된다.

## split long task

```go
main(){
    go longTask() // longTask를 main에서 분리

    // main task
    for i := 0; i < 5; i++ {
        fmt.Println("main task", i)
        time.Sleep(1 * time.Second)
    }

    // main task가 종료되지 않도록 대기
    time.Sleep(10 * time.Second)
}

func longTask(){
    for i := 0; i < 10; i++ {
        fmt.Println("long task", i)
        time.Sleep(1 * time.Second)
    }
}
```

## parallel task

```go
package main

import (
 "fmt"
)

func main() {
 ch := make(chan int)
 for i := 0; i < 100000; i++ { // 병렬로 처리
  go func() {
            // ...logic...
   ch <- 1
  }()
 }

 count := 0
 for i := 0; i < 100000; i++ {
  count += <-ch // 먼저 온 것부터 처리
 }

 fmt.Println(count) // 100000 기대
}
```
