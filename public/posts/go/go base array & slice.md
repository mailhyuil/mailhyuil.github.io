# go base array & slice

> array: [num]type{}
>
> slice(list): []type{}

```go
package main

import "fmt"
func main(){
  // array
  arr := [3]string{"hyuil", "sb", "nico"}
  fmt.Println(arr)

  // slice
  // list와 같은 개념
  slice := []string{"hyuil", "sb", "nico"}
  fmt.Println(slice)

  newSlice := append(slice, "june")
  fmt.Println(newSlice)
}

```
