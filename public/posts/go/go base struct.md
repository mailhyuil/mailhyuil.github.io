# go base struct

> go에는 object, class가 없다. 대신 struct를 사용한다.
>
> > go는 constructor가 없다. 대신 struct를 생성하는 함수를 만들어 사용한다.
> >
> > > > 함수는 struct 내부가 아닌 외부에서 receiver로 사용한다.

```go
package main

import "fmt"

type user struct {
  name string
  age int
  posts []post
}

// 생성자 대신 함수를 만들어 사용
func NewUser(name string, age int) *user {
  u := user {
    name: name,
    age: age,
  }
  return &u
}

type post struct {
  title string
  content string
}

func main(){
  hyuil := user {
    name: "hyuil",
    age: 25,
  }
  fmt.Println(hyuil.name)
  fmt.Println(hyuil.age)
}
```

## receiver

```go
type user struct {
    name string
    age  int
}

func (u user) PrintInfo() {
    fmt.Println(u.name, u.age)
}
```
