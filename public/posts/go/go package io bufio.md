# go package io bufio

> 버퍼링된 I/O를 제공하는 패키지

```go
f, _ := os.Open("test.txt")
scanner := bufio.NewScanner(f)

for scanner.Scan() {
    fmt.Println(scanner.Text()) // 한 줄씩 출력
}
```
