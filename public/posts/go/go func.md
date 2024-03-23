# go func

```go
func test(str string) (int, string) {
    return len(str), strings.ToUpper(str)
}

len, upper := test("hello")
len, _ := test("hello") // _는 compiler가 사용하지 않는 변수라고 판단 무시

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
