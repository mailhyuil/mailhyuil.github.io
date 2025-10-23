# go trace

> goroutine 스케줄링, 블로킹, 시스템 콜, GC 타이밍까지 전부 트레이싱
>
> > 병렬 처리 성능 분석할 땐 pprof보다 더 유용

```go
import "runtime/trace"

f, _ := os.Create("trace.out")
defer f.Close()

trace.Start(f)
defer trace.Stop()
```

## cli

```sh
go tool trace trace.out
```
