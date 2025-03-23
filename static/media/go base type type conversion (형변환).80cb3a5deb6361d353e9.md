# go type type conversion (형변환)

```go
var a int = 42
var b float64 = float64(a)

var s string = "Hello"
var bytes []byte = []byte(s)
```

## strconv 사용

```go
import "strconv"

s := strconv.Itoa(123)      // "123"
i, _ := strconv.Atoi("456") // 456
```
