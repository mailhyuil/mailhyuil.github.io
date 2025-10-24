# grpc grpc-web

## install

```sh
npm i protoc
npm i grpc-web
npm i protoc-gen-grpc-web

protoc -I=$DIR echo.proto \
--js_out=import_style=commonjs:generated \
--grpc-web_out=import_style=commonjs,mode=grpcwebtext:generated
```

## usage

```js
const { EchoServiceClient } = require("./generated/echo_grpc_web_pb.js");
const { EchoRequest } = require("./generated/echo_pb.js");

const client = new EchoServiceClient("localhost:8080");

const request = new EchoRequest();
request.setMessage("Hello World!");

const metadata = { "custom-header-1": "value1" };

client.echo(request, metadata, (err, response) => {
  // ...
});
```
