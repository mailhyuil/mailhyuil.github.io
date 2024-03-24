# go base pointer

```go
func main(){
    a := 0;
    b := &a
    a = 10
    fmt.Println(a, *b) // 10 10

    *b = 20
    fmt.Println(a, *b) // 20 20
}
```
