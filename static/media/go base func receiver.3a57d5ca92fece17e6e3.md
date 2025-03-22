# go base receiver

> 대부분 pointer를 사용하고 특별한 경우(struct가 작은 경우, 읽기전용)일때만 value를 사용한다.
>
> > 작은 struct에서 포인터를 사용하면 오히려 메모리가 낭비될 수 있고 더 느리다

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
> > > > 하지만 구조체가 작을 경우 메모리 낭비가 발생할 수 있음 (GC의 부하 증가)

```go
func (u *User) PrintInfo() {
    fmt.Println(u.name, u.age)
}
```
