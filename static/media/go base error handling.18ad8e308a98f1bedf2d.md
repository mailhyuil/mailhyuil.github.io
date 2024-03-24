# go base error handling

> go는 try catch가 없다.
>
> > if문을 통해 체크하고 직접 에러를 반환해야 한다.
> >
> > > 에러가 반환되었는지 nil이 반환되었는지 체크하고 에러가 발생하면 처리해야 한다.

```go
func (u *user) withdraw(amount int) error {
    if u.balance < amount {
        return errors.New("insufficient balance")
        u.balance -= amount
        return nil
    }
}

func main() {
    user := NewUser({
        name: "james",
        balance: 1000
    })

    if err := user.withdraw(100); err != nil {
       log.Fatalln(err) // log.Fatal은 프로그램을 종료한다.
    }
}
```
