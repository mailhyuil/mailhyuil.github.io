# go base make initialize

> go에서는 객체를 생성할 때 new와 make를 사용한다.

```go
package main

import "fmt"

func main() {
    // new는 메모리를 할당하고 0으로 초기화한 후
    // 메모리 주소를 반환한다.
    p := new(int)
    fmt.Println(*p) // 0

    // make는 초기화된 값을 반환한다.
    // slice, map, channel을 생성할 때 사용한다.
    s := make([]int, 0)
    fmt.Println(s) // []
}
```
