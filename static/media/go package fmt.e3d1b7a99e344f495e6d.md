# go package fmt

> 문자열을 형식화하고 출력하는 패키지

```go
fmt.Println("Hello, World!") // Hello, World!
fmt.Printf("Hello, %s!\n", "World") // Hello, World!
fmt.Sprintf("Hello, %s!", "World") // Hello, World!
fmt.Errorf("Error: %s", "Something went wrong") // Error: Something went wrong
fmt.Fprintf(os.Stdout, "Hello, %s!\n", "World") // Hello, World!
fmt.Fprint(os.Stderr, "Error: Something went wrong") // Error: Something went wrong
```
