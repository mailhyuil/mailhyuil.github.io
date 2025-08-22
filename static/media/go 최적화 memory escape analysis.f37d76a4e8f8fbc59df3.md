# go 최적화 escape analysis

> **escape analysis(이스케이프 분석)**는 Go 컴파일러가 "이 값은 힙(heap)에 할당해야 할까, 스택(stack)에 할당해도 될까?" 를 판단하는 과정
>
> > 변수가 함수 밖으로 도망갔는지(escape) 분석해서, 스택에 둘지 힙에 둘지 결정하는 최적화 과정
> >
> > > 가능한 많은 데이터를 스택에만 할당하여 GC 부담을 낮추고, 성능을 높이고, 캐시 효율성도 높인다.

```sh
go build -gcflags="-m main.go"
```

## 힙에 할당되는 경우 (escape 발생)

```go
func makeUser(name string) *User {
    user := User{Name: name}
    return &user // ← user가 함수 밖으로 나감 → escape 발생
}
```

## 스택에 머무는 경우 (escape 안 함)

```go
func doSomething() {
    user := User{Name: "휴일"}
    fmt.Println(user.Name) // 함수 안에서만 사용 → escape 안 함
}
```
