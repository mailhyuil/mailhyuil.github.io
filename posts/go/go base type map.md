# go base map

> map[key]value{} 형태로 사용한다.
>
> > 접근 시 기본으로 value, ok를 리턴한다.

```go
package main

func main(){

  hyuilMap := map[string]string{
    "name": "hyuil",
    "age": "3",
  }

  for key, value := range hyuilMap {
    println(key, value)
  }

  value, ok := hyuilMap["name"]
  println(value, ok) // 값이 없으면 ok는 false

  hyuilMap["name"] = "hyuil2" // 값 변경
  hyuilMap["name2"] = "hyuil3" // 값 추가

  delete(hyuilMap, "name") // 값 삭제

  println(hyuilMap["name"]) // 값이 없으면 "" 리턴

  println(len(hyuilMap)) // 길이
}
```
