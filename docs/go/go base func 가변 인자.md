# go base 가변 인자

> 함수를 호출할 때 인자 개수를 유동적으로 넘길 수 있는 함수
>
> > 가변 인자는 한번만 마지막에 넣어야한다.

```go
func sum(nums ...int) int {
    total := 0
    for _, n := range nums {
        total += n
    }
    return total
}

func sum(initialNum int, nums ...int) int {}
```
