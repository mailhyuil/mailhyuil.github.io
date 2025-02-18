# python fastapi grpc

## install

```sh
python -m venv .venv

# activate venv (mac)
source .venv/bin/activate
# activate venv (window) powershell에서 실행해야한다.
.venv\Scripts\activate

# 설치
pip install grpc-fastapi fastapi uvicorn
python -m pip install grpc-fastapi fastapi uvicorn

# 실행
uvicorn main:app --reload
```

## /proto/my_service.proto

```proto
syntax = "proto3";

package myservice;

// gRPC 서비스 정의
service MyService {
  rpc GetWords (MyRequest) returns (MyResponse);
}

// 요청 메시지
message MyRequest {
  string text = 1;
}

// 응답 메시지 (배열 반환)
message MyResponse {
  repeated string words = 1;
}
```

## 코드생성

```sh
python -m grpc_tools.protoc \
    --proto_path=proto \
    --python_out=generated \
    --grpc_python_out=generated \
    proto/my_service.proto
```

## app.py

```py
from fastapi import FastAPI
from grpc_fastapi.reflector import ServiceReflector
import generated.my_service_pb2_grpc as pb2_grpc
import subprocess

app = FastAPI()

# gRPC 서버 실행 (백그라운드)
grpc_process = subprocess.Popen(["python", "service.py"])

# FastAPI + gRPC 통합
reflector = ServiceReflector(app, services=[pb2_grpc])

@app.get("/")
async def root():
    return {"message": "Hello, FastAPI + gRPC!"}

@app.get("/grpc/{text}")
async def call_grpc(text: str):
    import grpc
    import generated.my_service_pb2 as pb2

    channel = grpc.insecure_channel("localhost:50051")
    stub = pb2_grpc.MyServiceStub(channel)
    response = stub.GetWords(pb2.MyRequest(text=text))
    return {"grpc_response": list(response.words)}
```
