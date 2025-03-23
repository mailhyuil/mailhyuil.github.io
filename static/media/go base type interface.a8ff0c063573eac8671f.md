# go base interface

> interface는 어떠한 타입도 포함할 수 있는 타입이다.

```go
type error interface {
    Error() string
}

s := []interface{}{"hyuil", 1, 2.0, true} // 다양한 타입을 담을 수 있는 slice

m := map[string]interface{}{
    "name": "hyuil",
    "age": 3,
}
```
