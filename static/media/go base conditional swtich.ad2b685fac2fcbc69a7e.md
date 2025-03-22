# go base switch

```go
switch age {
    case: 10
        fmt.Println("10살")
    case: 20
        fmt.Println("20살")
    default:
        fmt.Println("나이를 알 수 없습니다.")
}
```

## switch문 변수 선언

```go
// switch문 내에서만 사용하는 변수
switch koreanAge := age + 2; koreanAge {
    case: 10
        fmt.Println("10살")
    case: 20
        fmt.Println("20살")
    default:
        fmt.Println("나이를 알 수 없습니다.")
}
```
