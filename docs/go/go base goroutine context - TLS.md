# go base goroutine context - TLS

> js의 async local storage, java, cpp의 thread local storage와 비슷한 개념
>
> > go에는 TLS가 없고 대신 context 패키지를 사용한다.
> >
> > > 각 goroutine마다 context를 생성하고, 필요한 값을 context에 저장하여 전달한다.

## WithValue & Background

> Background는 최상위 context로, 모든 context의 부모가 된다.
>
> > WithValue에 Background를 전달하면, 최상위 context를 생성한다.

```go
package main

import (
	"context"
	"fmt"
)

type ctxKey string

func main() {
	ctx := context.WithValue(context.Background(), ctxKey("userID"), 99) // context 생성
	go doSomething(ctx) // context 전달
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
