# go base conditional swtich

> go의 switch문은 기본적으로 break문을 가진 것처럼 작동한다.
>
> > 만약 다음 case문으로 넘어가고 싶다면 fallthrough를 사용해야 한다.

```go
switch age {
    case: 10
        fmt.Println("10살")
    case: 20,30 // 여러 case문을 사용할 수 있다.
        fmt.Println("20살 또는 30살")
    case: age < 40
        fmt.Println("40살 미만")
    default:
        fmt.Println("나이를 알 수 없습니다.")
}
```

## fallthrough

```go
k := 2

switch k {
	case 1:
		fmt.Println("k: 1")
	case 2:
		fmt.Println("k: 2")	// return Println
		fallthrough
	case 3:
		fmt.Println("k: 3")	// return Println
		fallthrough
	case 4:
		fmt.Println("k: 4")	// return Println
		fallthrough
	default:
		fmt.Println("default")	// return Println
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
