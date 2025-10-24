# go 최적화 cpu pprof

> CPU 사용량, 메모리 사용량, goroutine, 블로킹, 할당량 등 전부 분석 가능
>
> > 시각화 도구 제공

## 서버

```go
import _ "net/http/pprof"

go func() {
	http.ListenAndServe("localhost:6060", nil)
}()
```

## 브라우저

```txt
http://localhost:6060/debug/pprof/
```

## cli

```sh
go tool pprof http://localhost:6060/debug/pprof/profile?seconds=30
# or
go run main.go
go tool pprof cpu.prof
```
