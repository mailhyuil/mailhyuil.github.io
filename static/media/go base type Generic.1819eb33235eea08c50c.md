# go base interface Generic

## Strict

> 정의 된 타입만 사용 가능

```go
// Generic
type MyMap[T string | int] map[string]T

type MyType struct {
    string | int
}

// function
func MyFunc[T string | int](m map[string]T) {
    // ...
}
```

## Derive

> 파생된 타입도 허용

```go
// Generic
type MyInt int // 허용

type MyMap[T ~string | ~int] map[string]T

type MyType struct {
    ~string | ~int
}

// function
func MyFunc[T ~string | ~int](m map[string]T) {
    // ...
}
```
