# python api grpc (grpcio)

## install

```sh
python -m venv .venv

# activate venv (mac)
source .venv/bin/activate
# activate venv (window) powershell에서 실행해야한다.
.venv\Scripts\activate

pip install grpcio grpcio-tools

# proto 파일을 python 파일로 변환
python -m grpc_tools.protoc -Iproto --python_out=. --grpc_python_out=. proto/chat.proto
```

## chat.proto

```proto
syntax = "proto3";

package chat;

// gRPC 서비스 정의
service ChatService {
  rpc SendMessage (ChatRequest) returns (ChatResponse);
}

// 요청 메시지
message ChatRequest {
  string message = 1;
}

// 응답 메시지
message ChatResponse {
  string reply = 1;
}
```

## grpc server

```py
import grpc
import chat_pb2
import chat_pb2_grpc
from concurrent import futures

class ChatService(chat_pb2_grpc.ChatServiceServicer):
    def SendMessage(self, request, context):
        print(f"받은 메시지: {request.message}")  # 받은 메시지 출력
        reply_message = f"서버 응답: {request.message}!"
        return chat_pb2.ChatResponse(reply=reply_message)

# gRPC 서버 실행
def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    chat_pb2_grpc.add_ChatServiceServicer_to_server(ChatService(), server)
    server.add_insecure_port('[::]:50051')  # 포트 50051 사용
    print("🚀 gRPC 서버 시작됨...")
    server.start()
    server.wait_for_termination()

if __name__ == "__main__":
    serve()
```

## grpc client

```py
import grpc
import chat_pb2
import chat_pb2_grpc

def run():
    # gRPC 서버와 연결
    channel = grpc.insecure_channel('localhost:50051')
    stub = chat_pb2_grpc.ChatServiceStub(channel)

    # 서버에 메시지 보내기
    request = chat_pb2.ChatRequest(message="안녕, 서버!")
    response = stub.SendMessage(request)

    print(f"서버 응답: {response.reply}")

if __name__ == "__main__":
    run()
```
