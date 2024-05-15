# go base goroutine

> Go 언어에서 사용되는 경량 스레드(lightweight thread)
>
> go에서는 goroutine을 사용하여 동시성을 구현할 수 있다.
>
> > goroutine은 main 함수가 종료되면 같이 종료된다.

```go
main(){
    go longTask()

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
