# grpc 통신 방식 unary

## proto

```proto
service GreetService {
  rpc SayHello (HelloRequest) returns (HelloReply) {}
}
```

## server

```go
package main

import (
	"context"

	pb "github.com/mailhyuil/greet/proto"
)

func (s *Server) Greet(ctx context.Context, in *pb.GreetRequest) (*pb.GreetResponse, error) {
	return &pb.GreetResponse{Result: "Hello " + in.FirstName}, nil
}
```

## client

```go
package main

import (
	"context"
	"log"

	pb "github.com/mailhyuil/greet/proto"
)

func doGreet(c pb.GreetServiceClient) {
	log.Println("doGreet was invoked")
	r, err := c.Greet(context.Background(), &pb.GreetRequest{FirstName: "Clement"})

	if err != nil {
		log.Fatalf("Could not greet: %v\n", err)
	}

	log.Printf("Greeting: %s\n", r.Result)
}
```
