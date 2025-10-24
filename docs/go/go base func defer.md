# go base func defer

> defer는 함수가 종료될 때 실행되는 함수를 등록하는 기능이다. 주로 리소스 해제, 파일 닫기 등에 사용된다.
>
> > 함수가 return 되거나 panic 나도 실행됨
> >
> > > 여러 개 쓸 수 있음 → 쌓이는 순서대로 역순으로 실행됨 (LIFO)
> > >
> > > > try catch의 finally 용도로 사용

```go
func main() {
    defer fmt.Println("끝났어요")
    fmt.Println("시작!")
}
```
