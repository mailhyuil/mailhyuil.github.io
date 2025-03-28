# go cli build C

> ffi등의 사용을 위해 C로 빌드
>
> > Go 코드를 C에서 사용할 수 있는 .a, .so, .dll로 빌드

```sh
go build -buildmode=c-shared -o libcalc.so calc.go
```
