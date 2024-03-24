# go base map

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
}
```
