# go base type struct private & public

> 프로퍼티의 앞글자를 대문자로 시작하면 public, 소문자로 시작하면 private이다.

## /dto/obj.go

```go
package obj

type Obj struct {
  PublicValue string
  privateValue string
}

// 생성자 대신 함수를 만들어 사용
func New(PublicValue string, privateValue string) *Obj {
  o := Obj {
    PublicValue: PublicValue,
    privateValue: privateValue,
  }
  return &o
}

func (o *Obj) PublicFunc() {
    fmt.Println(o.name, o.age)
}

func (o *Obj) privateFunc() {
    fmt.Println(o.name, o.age)
}
```

## /main.go

> module이 example.com 일 시

```go
package main

import (
  "fmt"
  obj "example.com/dto"
  )

func main(){
  o := obj.New("public", "private")
  o.PublicValue // o
  o.privateValue // x

  o.PublicFunc() // o
  o.privateFunc() // x
}
```
