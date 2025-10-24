# grpc proto 문법

> = 1은 (태그넘버)는 각 필드를 식별하고 직렬화(Serialization)할 때 사용됨.

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
