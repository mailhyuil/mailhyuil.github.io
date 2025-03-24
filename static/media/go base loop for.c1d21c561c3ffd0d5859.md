# go loop

> go에는 for문과 for range문만 존재한다.
>
> > 배열의 경우 index, value
> >
> > map의 경우 key, value

## for range 문

```go
for index, users := range users {
  fmt.Println(index, users)
}

// index 생략
for _, users := range users {
  fmt.Println(index, users)
}

// value 생략
for index := range users {
  fmt.Println(index, users)
}

// 전부 생략
for range users {
  fmt.Println(index, users)
}
```

## for 문

```go
for i := 0; i < 5; i++ {
  fmt.Println(i)
}
```

## while 문 처럼 사용

```go
ok := scanner.Scan() // bol
for ok {
    fmt.Println(scanner.Text())
    ok = scanner.Scan()
}
```

## while-break 문 처럼 사용

```go
for {
    select {
    case msg := <-ch:
        fmt.Println("받음:", msg)
    case <-done:
        fmt.Println("끝!")
        return
    }
}
```

## 함수로 사용

```go
func addAll(numbers ...int) (total int){
    for _, number := range numbers {
        total += number
    }
    return
}
```
