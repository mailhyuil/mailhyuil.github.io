# go package io

> 입출력, 파일 처리 관련 패키지

```go
f, _ := os.Open("test.txt")
data, _ := io.ReadAll(f)
fmt.Println(string(data))
```
