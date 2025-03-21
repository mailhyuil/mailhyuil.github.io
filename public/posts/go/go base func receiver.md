# go base receiver

> 대부분 pointer를 사용하고 특별한 경우(읽기전용)일때만 value를 사용한다.

## Value Receiver

> 구조체를 복사해서 메소드를 호출
>
> > 원본에 영향이 x
> >
> > > 메모리를 조금 더 씀
> > >
> > > > 주로 읽기 전용이거나 작은 구조체에 사용

```go
func (u User) PrintInfo() {
    fmt.Println(u.name, u.age)
}
```

## Pointer Receiver

> 구조체의 원본 주소값을 참조
>
> > 값 변경 가능
> >
> > > 구조체가 클 경우 효율적
> > >
> > > > 대부분 Pointer Receiver를 씀. 너도 그냥 습관처럼 사용하는게 좋음

```go
func (u *User) PrintInfo() {
    fmt.Println(u.name, u.age)
}
```
