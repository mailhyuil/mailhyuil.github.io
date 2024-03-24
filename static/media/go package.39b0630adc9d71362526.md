# go package

> import 문으로 패키지를 가져올 수 있다.
>
> > export는 함수나 변수의 앞글자를 대문자로 시작하면 된다.

```go
import "fmt"
import (
    "fmt"
    "math"
)

// export 됨
func HelloWorld() {
    fmt.Println("Hello World")
}

// export 안됨
func helloWorld() {
    fmt.Println("Hello World")
}
```
