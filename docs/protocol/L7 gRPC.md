# L7 gRPC

```sh
protocol : http2
message format : protobuf
port : 50051

```

## todo.proto

```proto
syntax = "proto3";

package todo;

service Todo {
  rpc create (TodoItem) returns (TodoItem);
  rpc findAll (NoParam) returns (TodoItems);
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
