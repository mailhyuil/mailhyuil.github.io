# go cli build C

> ffi등의 사용을 위해 C로 빌드
>
> > Go 코드를 C에서 사용할 수 있는 .a, .so, .dll로 빌드
> >
> > > 소스코드에 import "C"가 포함, c 기반 패키지 등이 있으면 CGO_ENABLED=1을 사용
> > >
> > > 소스코드가 순수 Go로 작성된 경우 CGO_ENABLED=0을 사용하면 빌드가 더 빠르고 작아짐

```sh
CGO_ENABLED=1 go build -o calc.a -buildmode=c-archive calc.go
CGO_ENABLED=0 go build

go build -o calc.so -buildmode=c-shared calc.go
```
