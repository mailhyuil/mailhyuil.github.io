# go base pointer

## \*

> 참조값을 가리키는 포인터

## &

> 메모리 주소를 가리키는 포인터

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
