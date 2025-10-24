# nodejs CPU Bound Binding Native Addon

> Native란 기계어 즉 바이너리 코드로 작성된 프로그램을 의미한다. (c, c++, rust, golang 등)
>
> 빌드 os 환경에 의존적이다. (node-gyp)
>
> > nodejs의 libuv thread pool을 사용하지 않고 별도의 native thread를 사용하여 cpu bound 작업을 처리
> >
> > > 완료된 작업을 uv_queue_work()을 사용해 libuv에게 넘기고 event-loop에 등록한다.
> > >
> > > > 라이브러리를 다운로드받고 별도의 build과정을 거친다. (pnpm approve-builds)
> > > >
> > > > 일부 패키지는 미리 빌드된 바이너리를 제공한다. (prebuilds)
> > > >
> > > > > 최종적으로 .node(c/c++로 작성된 바이너리) 파일을 사용한다.

## install

```sh
npm i node-gyp
npm i napi-rs
npm i neon
```

## NAN (Native Abstractions for Node.js)

> Legacy
>
> > if you want something mature and very backwards-compatible
> >
> > > 최초의 native addon library이기 때문에 오래된 버전의 nodejs와 호환된다.

## node-addon-api

> if you want something forwards-looking in C++
>
> > C++로 native addon을 작성

## N-API (Node-API)

> if you are comfortable working in C and dealing with possible lower-level concerns
>
> > C로 native addon을 작성

## neon / napi-rs

> nodejs의 native addon을 작성하기 위한 rust wrapper
>
> > Rust로 native addon을 작성

## node-gyp

> native addon module을 빌드하기 위한 command-line tool
>
> > 사용하기 위해서는 python과 C++ 컴파일러가 필요하다.
