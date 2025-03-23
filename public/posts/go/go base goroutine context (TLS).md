# go package context

> js의 async local storage, java, cpp의 thread local storage와 비슷한 개념
>
> > go에는 TLS가 없고 대신 context 패키지를 사용한다.
> >
> > > 각 goroutine마다 context를 생성하고, 필요한 값을 context에 저장하여 전달한다.

```go
package main

import (
	"context"
	"fmt"
)

type ctxKey string

func main() {
	ctx := context.WithValue(context.Background(), ctxKey("userID"), 99) // context 생성
	doSomething(ctx) // context 전달
}

func doSomething(ctx context.Context) {
	userID, ok := ctx.Value(ctxKey("userID")).(int)
	if !ok {
		fmt.Println("userID 없음")
		return
	}
	fmt.Println("userID:", userID)
}
```
