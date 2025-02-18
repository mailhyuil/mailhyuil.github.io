# python api fastapi grpc

> fastapi 앱 내에 grpc 서버를 포함한 것

## install

```sh
poetry add fastapi
poetry add uvicorn
poetry add grpcio-tools
poetry add hupper
```

## example.proto

```proto
syntax = "proto3";

package example;

service ExampleService {
  rpc SayHello (HelloRequest) returns (HelloResponse);
}

message HelloRequest {
  string name = 1;
}

message HelloResponse {
  string message = 1;
}
```

## generate proto

```sh
python -m grpc_tools.protoc -I. --python_out=. --grpc_python_out=. example.proto
```

## main.py

```py
from concurrent import futures
import grpc
from fastapi import FastAPI
import example_pb2
import example_pb2_grpc

app = FastAPI()

class ExampleService(example_pb2_grpc.ExampleServiceServicer):
    def SayHello(self, request, context):
        return example_pb2.HelloResponse(message=f"Hello, {request.name}!")

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    example_pb2_grpc.add_ExampleServiceServicer_to_server(ExampleService(), server)
    server.add_insecure_port('[::]:50051')
    server.start()
    server.wait_for_termination()

if __name__ == "__main__":
    serve()
```

## run

```sh
# fastapi 서버 실행
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
# grpc 서버 실행
hupper -m main
```
