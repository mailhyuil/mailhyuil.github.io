# c++ node-gyp

> Nodejs 네이티브 애드온 빌드 툴
>
> > 로컬 컴퓨터에서 설치된 Python, make, clang을 사용
> >
> > > `<node.h> path`
> > >
> > > (윈도우: `C:\Users\<UserName>\AppData\Local\node-gyp\Cache\<NodeVersion>\include\node`)
> > >
> > > (맥: `/usr/local/include/node`)

## install

```sh
visual studio build tools 설치 ("Desktop development with C++" workload를 포함)
python 설치 (윈도우: 환경변수 추가)
npm i -g node-gyp
```

## hello.cc

```cpp
// hello.cc
#include <node.h>

namespace demo {

using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Value;

// Method 정의
void MyCustomMethod(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  args.GetReturnValue().Set(String::NewFromUtf8(
      isolate, "Hello World!!!").ToLocalChecked());
}

// 필수
void Initialize(Local<Object> exports) {
  NODE_SET_METHOD(exports, "sayHello", MyCustomMethod);
}

// 필수
NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)

}  // namespace demo
```

## binding.gyp

```gyp
{
  "targets": [
    {
      "target_name": "addon",
      "sources": [ "hello.cc" ]
    }
  ]
}
```

## build

```sh
node-gyp configure # makefile 생성
node-gyp build # 빌드
```

## main.js

```js
const addon = require("./build/Release/addon.node");

console.log(addon.sayHello()); // 'Hello World!!!'
```
