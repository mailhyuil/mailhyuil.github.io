# nodejs module wasi (WebAssembly System Interface)

> node 20 이상부터 내장된 wasm 모듈
>
> 20 이하에서는 npm install wasi로 설치 가능
>
> > WebAssembly는 원래 브라우저용으로 만들어져서 파일 읽기, 네트워크 요청, os 기능을 제공하지 않음
> >
> > > 그걸 해결해주는 interface가 wasi

```js
const { WASI } = require("wasi");

// wasm buffer 읽기
const wasmBuffer = fs.readFileSync(path.resolve(__dirname, "add.wasm"));

// wasm buffer를 컴파일
const wasmModule = await WebAssembly.compile(wasmBuffer);

// 컴파일된 wasm 모듈을 인스턴스화
const wasi = new WASI({
  version: "preview1",
});
const importObject = { wasi_snapshot_preview1: wasi.wasiImport };
const instance = await WebAssembly.instantiate(wasmModule, importObject);
wasi.start(instance); // wasi로 instance를 monkey patch

const result = instance.exports.add(5, 7);
```
