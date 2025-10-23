# go base func String()

> struct나 type에 String() 메소드를 정의하면 fmt.Println() 등에서 자동으로 호출된다.

```go
func (u *User) String() string {
    return fmt.Sprintf("name: %s, balance: %d", u.name, u.balance)
}
```
