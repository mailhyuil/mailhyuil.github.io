# go nodejs ffi

## main.go

```go
package main

import (
	"C"
	"fmt"
)

//export SayHello
func SayHello() {
	fmt.Println("Hello, World!")
}

func main() {}
```

## build

```sh
go build -o main.so -buildmode=c-shared main.go
# main.so, main.h 생성됨
# nodejs 프로젝트로 복사
```

## install in nodejs

```sh
npm i ffi-napi
```

## main.js

```js
const ffi = require("ffi-napi");
const path = require("path");

const lib = ffi.Library(path.join(__dirname, "./main"), {
  SayHello: ["void", []],
});

lib.SayHello();
```
