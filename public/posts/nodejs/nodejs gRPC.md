# nodejs gRPC

## install

```sh
npm install grpc
npm install @grpc/proto-loader
```

## server

```js
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const packageDefinition = protoLoader.loadSync("todo.proto");
const grpcObject = grpc.loadPackageDefinition(packageDefinition);
const todo = grpcObject.todo;

const server = new grpc.Server();
grpc.bind("0.0.0.0:50051", grpc.ServerCredentials.createInsecure()); // 개발용
// grpc.bind("0.0.0.0:50051", grpc.ServerCredentials.createSsl()); // 운영용

server.addService(todo.Todo.service, {
  create: (call, callback) => {
    console.log(call.request);
    callback(null, call.request);
  },
  findAll: (call, callback) => {
    console.log(call.request);
    callback(null, { items: [{ id: 1, text: "hello" }] });
  },
  findAllStream: call => {
    console.log(call.request);
    call.write({ id: 1, text: "hello" });
    call.write({ id: 2, text: "world" });
    call.end();
  },
});

server.start();
```

## todo.proto

```proto
syntax = "proto3";

package todo;

service Todo {
  rpc create (TodoItem) returns (TodoItem);
  rpc findAll (NoParam) returns (TodoItems);
  rpc findAllStream (NoParam) returns (stream TodoItem);

}

message NoParam {}

message TodoItem {
  int32 id = 1;
  string text = 2;
}

message TodoItems {
  repeated TodoItem items = 1;
}
```

## client

```js
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const packageDefinition = protoLoader.loadSync("todo.proto");
const grpcObject = grpc.loadPackageDefinition(packageDefinition);
const todo = grpcObject.todo;

const client = new todo.Todo("localhost:50051", grpc.credentials.createInsecure());

client.create({ id: 1, text: "hello" }, (err, response) => {
  console.log(response);
});

client.findAll({}, (err, response) => {
  console.log(response);
});

const call = client.findAllStream({});
call.on("data", data => {
  console.log(data);
});
call.on("end", () => {
  console.log("end");
});
```
