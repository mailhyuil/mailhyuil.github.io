# js web assembly Emscripten

> Emscripten은 LLVM(Low Level Virtual Machine) 컴파일러에 대한 백엔드로서 실행되는 소스 대 소스 컴파일러로서, Asm.js라는 이름의 자바스크립트 하위 집합을 생성한다.
>
> > C/C++ 코드를 웹 어셈블리로 컴파일하는 도구이다.

## install

```sh
git clone https://github.com/juj/emsdk.git
cd ./emsdk
git pull
./emsdk install latest
./emsdk activate latest
source ./emsdk_env.sh
emcc -v
```

## usage

```sh
emcc test.cpp -o test.js # test.js와 test.wasm 파일이 생성된다.

node test.js
```
