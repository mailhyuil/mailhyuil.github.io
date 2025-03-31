# go package os

> 파일, 디렉토리, 권한, 프로세스, 환경변수 등을 다루는 패키지

```go
package main
import (
    "fmt"
    "os"
)

func main() {
    // Get the current working directory
    dir, err := os.Getwd()
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Println("Current working directory:", dir)

    // Create a new directory
    err = os.Mkdir("newdir", 0755)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Println("Directory created")

    // Remove the directory
    err = os.Remove("newdir")
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Println("Directory removed")
}
```
