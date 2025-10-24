# go base type type assertion - 타입 단언

> interface 타입을 구체적인 타입으로 변환하는 방법
>
> > .(type) 구문을 사용하여 타입 단언을 수행한다.

```go
val := any(123)        // interface{}에 담김
num := val.(int)       // 타입 단언: interface → int
fmt.Println(num)       // 출력: 123
```
