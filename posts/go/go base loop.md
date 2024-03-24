# go loop

> go에는 for문과 for range문만 존재한다.
>
> > 배열의 경우 index, value
> >
> > map의 경우 key, value

## for range 문

```go
numbers := []int{1, 2, 3, 4, 5}
total := 0
for index, number := range numbers {
  total += number
}
fmt.Println(total) // 15

// 함수로 사용
func addAll(numbers ...int) (total int){
    for _, number := range numbers {
        total += number
    }
    return
}
```

## for 문

```go
for i := 0; i < 5; i++ {
  fmt.Println(i)
}
```
