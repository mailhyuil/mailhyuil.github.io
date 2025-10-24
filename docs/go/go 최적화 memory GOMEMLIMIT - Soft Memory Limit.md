# go 최적화 memory GOMEMLIMIT - Soft Memory Limit

> process가 사용할 수 있는 메모리의 limit을 넘으면 OOM (Out Of Memory) 에러가 발생한다.
>
> > GOMEMLIMIT을 설정 시 LIMIT에 도달하기 전에 GC를 발생시켜 메모리를 관리한다.
> >
> > > Hard Memory Limit보다 낮은 값으로 설정해야 한다. (hard: 1Gi, soft: 800~960Mi)

## 환경변수에서 설정

```sh
GOMEMLIMIT=512MB
```

## 코드에서 설정

```go
import "runtime/debug"

func init() {
    debug.SetMemoryLimit(512 * 1024 * 1024) // 512MB
}
```
