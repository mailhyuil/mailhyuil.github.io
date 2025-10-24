# python api grpc

## install

```sh
poetry add grpcio grpcio-tools hupper

grpc_tools.protoc -Iproto --python_out=. --grpc_python_out=. proto/message.proto

# 실행
hupper -m main
```

## message.proto

```proto
syntax = "proto3";

package message;

// gRPC 서비스 정의
service MessageService {
  rpc SendMessage (MessageRequest) returns (MessageResponse);
}

// 요청 메시지
message MessageRequest {
  string message = 1;
}

// 응답 메시지
message MessageResponse {
  string reply = 1;
}
```

## main.py

```py
import grpc
import message_pb2
import message_pb2_grpc
from concurrent import futures

class MessageService(message_pb2_grpc.MessageServiceServicer):
    def SendMessage(self, request, context):
        print(f"받은 메시지: {request.message}")  # 받은 메시지 출력
        reply_message = f"서버 응답: {request.message}!"
        return message_pb2.MessageResponse(reply=reply_message)

# gRPC 서버 실행
def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    message_pb2_grpc.add_MessageServiceServicer_to_server(MessageService(), server)
    server.add_insecure_port('[::]:50051')  # 포트 50051 사용
    print("🚀 gRPC 서버 시작됨...")
    server.start()
    server.wait_for_termination()

if __name__ == "__main__":
    serve()
```
