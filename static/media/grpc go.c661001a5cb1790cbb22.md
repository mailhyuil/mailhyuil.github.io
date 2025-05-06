# grpc go

## server

```go
package main

import (
	"log"
	"net"

	pb "github.com/mailhyuil/greet/proto"
	"google.golang.org/grpc"
)

var addr string = "localhost:50051"

type Server struct {
	pb.GreetServiceServer
}

func main() {
	lis, err := net.Listen("tcp", addr)

	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	defer lis.Close()
	log.Printf("Listening on %s", addr)

	s:= grpc.NewServer()
	pb.RegisterGreetServiceServer(s, &Server{})

	defer s.Stop()
	if err = s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
```

## client

```go
package main

import (
	"log"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

var addr string = "localhost:50051"

func main() {
	conn, err := grpc.NewClient(addr, grpc.WithTransportCredentials((insecure.NewCredentials())))

	if err != nil {
		log.Fatalf("failed to connect: %v", err)
	}
	defer conn.Close()
}
```
