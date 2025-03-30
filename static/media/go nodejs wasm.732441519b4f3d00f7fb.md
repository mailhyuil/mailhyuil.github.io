# go nodejs wasm

## main.go

```go
package main

//export add
func add(a, b int32) int32 {
	return a + b
}

func main() {}
```

## build

```sh
# nodejs 용
GOOS=wasip1 GOARCH=wasm tinygo build -o add.wasm main.go
# browser 용
GOOS=js GOARCH=wasm tinygo build -o add.wasm main.go
# add.wasm 생성됨
# nodejs 프로젝트로 복사
```

## install in nodejs

```sh
npm i wasi # node 20 이상부터는 기본 내장됨
```

## main.js

```js
const fs = require("fs");
const { WASI } = require("wasi");
const path = require("path");

const wasi = new WASI({
  version: "preview1",
});
const importObject = { wasi_snapshot_preview1: wasi.wasiImport };

const wasmBuffer = fs.readFileSync(path.resolve(__dirname, "add.wasm"));

(async () => {
  const wasmModule = await WebAssembly.compile(wasmBuffer);
  const instance = await WebAssembly.instantiate(wasmModule, importObject);
  wasi.start(instance);

  const result = instance.exports.add(5, 7);
  console.log("Result:", result); // 👉 12
})();
```
