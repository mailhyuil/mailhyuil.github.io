# go base map

> 기본으로 value, ok를 리턴한다.

```go
package main

func main(){
  hyuilMap := map[string]string{
    "name": "hyuil",
    "age": "30",
  }
  for key, value := range hyuilMap {
    println(key, value)
  }

  value, ok := hyuilMap["name"]
  println(value, ok) // 값이 없으면 ok는 false
}
```
