# go nodejs ffi

> C를 import 시 Go가 cgo모드로 빌드된다. (cgo 활성화)
>
> > cgo를 사용하면 go에서 C코드를 호출, go코드를 C로 export, C의 헤더파일을 import할 수 있다.
> >
> > > cgo는 C코드와 Go코드를 연결하는 도구이다.

```go
/*
#include <stdio.h>
*/
import (
	"C"
)

C.printf
C.malloc
C.free
...

//export SayHello
func SayHello() {
	fmt.Println("Hello, World!")
}
```

## c 코드 포함 가능

> `#include <stdio.h>`가 C 헤더처럼 작동함

```go
/*
#include <stdio.h>
*/
import "C"
```

## //export

> go의 함수를 C에서 사용할 수 있도록 export한다.

```go
package main

import (
	"C"
	"fmt"
)

//export SayHello
func SayHello() {
	fmt.Println("Hello, World!")
}

func main() {}
```
