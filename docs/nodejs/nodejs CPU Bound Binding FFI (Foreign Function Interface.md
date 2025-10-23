# nodejs FFI (Foreign Function Interface)

> C/C++로 작성된 라이브러리를 nodejs에서 사용할 수 있도록 하는 인터페이스
>
> > Native Addon과 다르게 메인 스레드에서 직접 호출되고 메인 스레드를 block한다.
> >
> > > .so, .dll, .dylib 파일을 사용한다.
> > >
> > > > bun, deno에서는 ffi api를 기본으로 제공한다.

## install

```sh
npm i node-ffi # Legacy
npm i ffi-napi
npm i ref-napi
npm i ref-struct-napi
```
