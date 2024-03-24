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

// switch문에서 변수를 선언하고 사용할 수 있다.
// 특정 case문에서만 사용하는 변수라고 명시적으로 표현할 수 있다.
switch koreanAge := age + 2; koreanAge {
    case: 10
        fmt.Println("10살")
    case: 20
        fmt.Println("20살")
    default:
        fmt.Println("나이를 알 수 없습니다.")
}
```
