# grpc 서비스 생성

## js

```sh
# grpc-tools 설치
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:. \
  --grpc_out=. --plugin=protoc-gen-grpc=`which grpc_node_plugin` \
  -I ./proto ./proto/hello.proto

# nestjs의 경우 내부적으로 생성해줌
```

## python

```sh
# grpc-tools 설치
grpc_tools.protoc -Iproto --python_out=. --grpc_python_out=. proto/message.proto
```
