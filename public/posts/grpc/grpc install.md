# grpc install

## install

```sh
# Protocol Buffers 툴킷 설치 (protoc)
brew install protobuf
winget install protobuf
apt install protobuf-compiler -y

# go gen plugin 설치
go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest

# js gen plugin 설치
npm i grpc-tools
# js runtime 패키지
npm i @grpc/grpc-js
npm i @grpc/proto-loader

# python gen plugin 설치
pip install grpcio-tools
# grpc runtime 패키지
pip install grpcio
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
# python
python -I. -m grpc_tools.protoc \
    --python_out=. \
    --grpc_python_out=. helloworld/helloworld.proto
```
