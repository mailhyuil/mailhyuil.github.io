# go type error custom

```go
type MyError struct {
    Code int
    Msg  string
}

func (e MyError) Error() string {
    return fmt.Sprintf("code %d: %s", e.Code, e.Msg)
}
```
