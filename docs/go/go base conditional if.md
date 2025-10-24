# go base conditional if

```go
if age < 16 {
    return false;
}
```

## if문 변수 선언

```go
// if문 내에서만 사용하는 변수
if koreanAge := age + 2; koreanAge < 18 {
    return false;
}

if err := doSomething(); err != nil {
    // 에러 처리
    fmt.Println("에러 발생:", err)
}
if errs := doSomethings(); len(errs) > 0 && errs[0] != nil {
    // 에러 처리
    fmt.Println("에러 발생:", errs)
}
```
