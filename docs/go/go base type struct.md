# go base type struct

> go에는 object, class가 없다. 대신 struct를 사용한다.
>
> > go는 constructor가 없다. 대신 struct를 생성하는 함수를 만들어 사용한다.
> >
> > > > 함수는 struct 내부가 아닌 외부에서 receiver로 사용한다.

## /dto/user.go

```go
package user

type User struct {
  name string
  age int
}

// 생성자 대신 함수를 만들어 사용
func New(name string, age int) *User {
  u := User {
    name: name,
    age: age,
  }
  return &u
}

// Value Receiver를 사용하여 메서드처럼 사용
// Value Receiver를 사용하면 메모리 주소를 참조하지 않고 값을 복사하여 사용한다.
// user.PrintInfo()와 같이 사용
func (u User) PrintInfo() {
    fmt.Println(u.name, u.age)
}

// Pointer Receiver를 사용하여 메서드처럼 사용
// Pointer Receiver를 사용하면 메모리 주소를 참조하여 값을 변경할 수 있다.
// user.UpdateInfo()와 같이 사용
func (u *User) UpdateInfo(name string, age int) {
    u.name = name
    u.age = age
}
```

## /main.go

> module이 example.com 일 시

```go
package main

import (
  "fmt"
  user "example.com/dto"
  )

func main(){
  hyuil := user.New("hyuil", 27)

  hyuil.PrintInfo() // hyuil 27
  hyuil.UpdateInfo("hyuil", 28)
  hyuil.PrintInfo() // hyuil 28
}
```
