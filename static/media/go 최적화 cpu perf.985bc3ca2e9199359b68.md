# go perf

> linux 바이너리 파일을 분석하는 도구
>
> > 하드웨어 카운터 기반 성능 분석 (cache miss, branch miss 등)

```sh
go build -o mybin -gcflags=all="-N -l" # 디버깅 정보 포함

perf record ./mybin
perf report
```
