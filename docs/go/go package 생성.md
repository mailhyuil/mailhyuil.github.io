# go package

> go mod init 후 진행
>
> > export할 함수나 변수의 앞글자를 대문자로 시작하면 된다.

## packages/user.go

```go
package user

import "fmt"

type User struct {
	name string
	age  int
}

func NewUser(name string, age int) *User {
	return &User{
		name,
		age,
	}
}

func (user User) PrintInfo() {
	fmt.Println(user.name, user.age)
}
```

## usage

```go
package main

import (
	"fmt"

	user "test.com/packages"
)

func main() {
	sb := user.NewUser("sb", 25)
	fmt.Println(sb)
}
```
