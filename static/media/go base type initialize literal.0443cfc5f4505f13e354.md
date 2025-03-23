# go type initialize literal

> &Type{}로 리터럴 초기화를 할 수 있다.
>
> > 초기값을 지정할 수 있다.

```go
p := new(Person) // zero value로만 초기화

p := &Person{}
p := &Person{name: "휴일", age: 99}
```
