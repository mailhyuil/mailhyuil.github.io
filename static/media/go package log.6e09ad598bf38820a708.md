# go package log

> log를 남기는 패키지

```go
log.Print(...)	  // 일반 로그 출력
log.Println(...)  // 개행 포함한 로그 출력
log.Printf(...)	  // 포맷 지정 로그 출력
log.Fatal(...)	  // 로그 출력 + os.Exit(1) ← ❗ 프로그램 종료함
log.Panic(...)	  // 로그 출력 + panic() ← ❗ 런타임 패닉 발생 (defer + recover()로 복구 가능)
```
