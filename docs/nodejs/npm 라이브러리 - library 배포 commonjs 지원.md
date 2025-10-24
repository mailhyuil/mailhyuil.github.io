# npm publish commonjs 지원

## package.json

```json
{
  "name": "@mailhyuil/parent",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@mailhyuil/child": "file:child"
  },
  "exports": {
    ".": {
      "types": "./index.d.ts", // typescript 지원 시
      "import": "./index.js", // esm 지원 시
      "require": "./index.cjs" // commonjs 지원 시 (cjs파일 생성하여 commonjs로 export 해주기)
    }
  }
}
```
