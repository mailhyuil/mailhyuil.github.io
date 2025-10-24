# go base type interface & any

> interface는 어떠한 타입도 포함할 수 있는 타입이다.
>
> > go 1.18부터는 `any`라는 별칭도 제공된다. (any == interface{})

```go
type error interface {
    Error() string
}

s := []interface{}{"hyuil", 1, 2.0, true} // 다양한 타입을 담을 수 있는 slice

a interface{} = "hyuil" // interface 타입으로 선언
a any := "hyuil" // any(interface) 타입으로 선언

m := map[string]interface{}{
    "name": "hyuil",
    "age": 3,
}

a := any(123) // 123을 any(interface)로 변환
a.(int) // 타입 단언: any → int
```
