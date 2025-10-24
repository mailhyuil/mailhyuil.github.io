# go base array & slice 얕은 복사

## 얕은 복사

> 값은 변경하면 원본도 변경된다.

```go
slice := []string{"a", "b", "c"}
clone := slice[:]
```

## 깊은 복사

> 값은 변경해도 원본은 변경되지 않는다.
>
> > 완전한 독립 복사본

```go
slice := []string{"a", "b", "c"}
clone := make([]string, len(slice))
copy(clone, slice) // 🔥 이제 완전 독립된 복사본!
```
