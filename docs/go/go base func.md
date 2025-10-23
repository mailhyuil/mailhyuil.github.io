# go func

```go
func test(str string) (int, string) {
    return len(str), strings.ToUpper(str)
}

len, upper := test("hello")
len, _ := test("hello") // _는 compiler가 사용하지 않는 변수라고 판단 무시

// 매개변수를 배열로 받기
func printAll(words ...string) {
    fmt.Println(words)
}
printAll("hello", "world", "go", "lang")
```

## named return

```go
func test(str string) (length int, upper string) {
    length = len(str)
    upper = strings.ToUpper(str)
    return
}
```

## defer

> 함수가 끝나기 직전에 실행되는 코드

```go
func test(){
    defer fmt.Println("func end")
    fmt.Println("hello")
}
```

## receiver

> 리시버의 변수명은 보통 첫 글자를 따서 사용한다.

```go
type user struct {
    name string
    age  int
}

func (u user) PrintInfo() {
    fmt.Println(u.name, u.age)
}
```
