# go base error handling

> go는 try catch가 없다.
>
> > if문을 통해 체크하고 직접 에러를 반환해야 한다.
> >
> > > 에러가 반환되었는지 nil이 반환되었는지 체크하고 에러가 발생하면 처리해야 한다.
> > >
> > > 에러가 발생하지 않았다면 항상 nil을 반환해야 한다.!!

```go
func (u *User) DoSomething() error {
    condition := true // some condition
    if condition {
        return nil
    } else {
        return errors.New("insufficient balance")
    }
}
if err := user.doSomething(); err != nil {
    log.Fatalln(err) // log.Fatal은 프로그램을 종료한다.
}

func (u *User) DoSomethingElse() (string, error) {
    condition := true // some condition
    if condition {
        return "done", nil
    } else {
        return "", errors.New("insufficient balance")
    }
}
if result, err := user.doSomethingElse(); err != nil {
    log.Fatalln(err)
} else {
    fmt.Println(result)
}

func (u *User) DoSomethings() (string, []error) {
    var errs []error
    if err := u.DoSomething(); err != nil {
        errs = append(errs, err)
    }
    if err := u.DoSomethingElse(); err != nil {
        errs = append(errs, err)
    }
    return "done", errs
}
if result, errs := user.doSomethings(); len(errs) > 0 && errs[0] != nil {
    log.Fatalln(errs)
} else {
    fmt.Println(result)
}
```
