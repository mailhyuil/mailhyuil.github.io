# go base goroutine errgroup

## install

```sh
go get golang.org/x/sync/errgroup
```

## errgroup

```go
package main

import (
	"context"
	"fmt"
	"golang.org/x/sync/errgroup"
	"time"
)

func main() {
	g, ctx := errgroup.WithContext(context.Background())

	g.Go(func() error {
		time.Sleep(1 * time.Second)
		fmt.Println("작업 1 완료")
		return nil
	})

	g.Go(func() error {
		return fmt.Errorf("작업 2에서 에러 발생!")
	})

	g.Go(func() error {
		<-ctx.Done() // context 취소 감지
		fmt.Println("작업 3 중단됨!")
		return ctx.Err()
	})

	if err := g.Wait(); err != nil {
		fmt.Println("최종 에러:", err)
	}
}
```
