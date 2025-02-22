# go base type

> custom type을 정의할 수 있다.

```go
type Dictionary map[string]string

type Money int

func main(){
   	dictionary := Dictionary{"first": "1st", "second": "2nd"}

	dictionary["third"] = "3rd"

	fmt.Println(dictionary)
}
```
