# grpc compiler - protoc

> protoc compiler는 각 언어의 gen plugin을 통해서 grpc 코드를 생성해준다.

## install

```sh
# Protocol Buffers Compiler 설치 (protoc)
brew install protobuf
winget install protobuf
apt install protobuf-compiler -y

# go gen plugin 설치
go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest

# python gen plugin 설치
pip install grpcio-tools
# grpc runtime 패키지
pip install grpcio

# js gen plugin 설치
npm i grpc-tools # protoc + protoc-gen-js, protoc-gen-grpc
# js runtime 패키지
npm i @grpc/grpc-js # grpc runtime 패키지
npm i @grpc/proto-loader # .proto 파일을 JS 객체로 로드해서 런타임에 사용할 수 있게 해주는 패키지

npm i protobufjs # proto 파일을 compile하지 않고 js로 사용할 수 있게 해주는 패키지
```

## usage

```sh
# go
protoc --go_out=. \
    --go_opt=paths=source_relative \
    --go-grpc_out=. \
    --go-grpc_opt=paths=source_relative \
    helloworld/helloworld.proto

# js
# import_style=commonjs,binary,typescript
# mode=grpcwebtext,grpcweb
# :dir_name
protoc -I=$DIR echo.proto \
    --js_out=import_style=commonjs:generated \
    --grpc-web_out=import_style=commonjs,mode=grpcwebtext:generated
grpc_tools_node_protoc \
  --js_out=import_style=commonjs,binary:./gen \
  --grpc_out=./gen \
  -I ./protos ./protos/your.proto

# python
python -I. -m grpc_tools.protoc \
    --python_out=. \
    --grpc_python_out=. helloworld/helloworld.proto
```
