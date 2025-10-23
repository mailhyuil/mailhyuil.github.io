# go GOMAXPROCS

> 최대 CPU 코어 수를 제한
>
> > 환경변수에 설정하거나 `runtime.GOMAXPROCS()` 함수로 설정

```go
package main

import (
	"fmt"
	"runtime"
)

func main() {
	cpuNum := runtime.GOMAXPROCS(1)
	fmt.Printf("CPU: %d -> 1\n", cpuNum)
}
```
