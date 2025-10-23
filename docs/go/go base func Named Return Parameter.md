# go func Named Return Parameter

> return type 명시 부분에 (name type) 형태로 작성하면
>
> > 선언과 반환을 대신 해줌
> >
> > > defer에서 조작할 수 있게된다.

```go
func something() (result int) { // result 선언
    defer func() {
        result += 100 // return 직전에 조작 가능
    }()
    result = 42
    return // 여기선 return result 안 써도 됨!
}

func divide(a, b int) (result int, err error) { // result, err 선언
    if b == 0 {
        err = fmt.Errorf("cannot divide by zero")
        return
    }
    result = a / b
    return
}
```
