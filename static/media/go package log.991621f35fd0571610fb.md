# go package log

> log를 남기는 패키지

```go
log.Print(...)	  // 일반 로그 출력
log.Println(...)  // 개행 포함한 로그 출력
log.Printf(...)	  // 포맷 지정 로그 출력
log.Panic(...)	  // 로그 출력 + panic() ← ❗ 런타임 패닉 발생 (defer + recover()로 복구 가능)
log.Fatal(...)	  // 로그 출력 + os.Exit(1) ← ❗ 프로그램 종료함
```

## log file로 남기기

```go
package main

import (
	"log"
	"os"
)

func main() {
	// 로그 파일 생성 (없으면 생성, 있으면 추가)
	file, err := os.OpenFile("app.log", os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0644) // |는 비트연산자 flag를 합치는 것
    // O_CREATE: 파일이 없으면 생성
    // O_WRONLY: 쓰기 전용으로 열기
    // O_APPEND: 파일 끝에 추가
    // 0644: 파일 권한 설정 (소유자 읽기/쓰기, 그룹 읽기, 다른 사용자 읽기)

	if err != nil {
		log.Fatal("로그 파일 생성 실패:", err)
	}
	defer file.Close()

	// 로그 출력을 파일로 변경
	log.SetOutput(file)

	// 예시 로그
	log.Println("🔥 서버 시작됨!")
	log.Println("💾 데이터 저장 처리 완료!")
}
```
