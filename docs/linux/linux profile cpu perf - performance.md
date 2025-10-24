# linux profile cpu perf - performance

> cpu 사용량, cache miss, branch misprediction, 메모리 접근 (load, store), system call 추적, context switch, 인터럽트 등을 분석하는 도구

## install

```sh
apt install linux-tools-common linux-tools-generic linux-tools-$(uname -r)
```

## usage

```sh
# perf <command> <file>
perf stat # 성능 통계 요약 (CPU 사용량, cache miss 등)
perf top # 실시간 CPU 사용 함수 보기 (top과 비슷)
perf record -p 1234 # 성능 데이터 기록 (샘플 수집)
perf report # record한 내용 분석
perf script # perf record한 내용을 human readable format으로 변환
perf annotate # 어셈블리 코드랑 같이 성능 분석
perf trace # system call 추적 (strace와 비슷)
```
