# go base if

```go
if age < 16 {
    return false;
}

// if문에서 변수를 선언하고 사용할 수 있다.
// 특정 if문에서만 사용하는 변수라고 명시적으로 표현할 수 있다.
if koreanAge := age + 2; koreanAge < 18 {
    return false;
}
```
