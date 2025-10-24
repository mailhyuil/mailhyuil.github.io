# go 최적화 cpu Prefork

> 앱 실행 시 미리 fork()를 통해 프로세스를 생성하여 요청을 처리하는 방식

```go
package main

import (
	"fmt"
	"net"
	"os"
	"os/exec"
	"syscall"
)

const (
	ADDR = ":8080"
)

func main() {
	if os.Getenv("IS_WORKER") == "1" {
		runWorker()
		return
	}

	// fork 4개의 worker 프로세스
	for i := 0; i < 4; i++ {
		cmd := exec.Command(os.Args[0])
		cmd.Env = append(os.Environ(), "IS_WORKER=1")
		cmd.Stdout = os.Stdout
		cmd.Stderr = os.Stderr
		cmd.Start()
		fmt.Println("Forked worker PID:", cmd.Process.Pid)
	}

	select {} // master는 대기만 함
}

func runWorker() {
	// 소켓 생성
	fd, err := syscall.Socket(syscall.AF_INET, syscall.SOCK_STREAM, syscall.IPPROTO_TCP)
	if err != nil {
		panic(err)
	}

	// SO_REUSEADDR, SO_REUSEPORT 설정
	err = syscall.SetsockoptInt(fd, syscall.SOL_SOCKET, syscall.SO_REUSEADDR, 1)
	if err != nil {
		panic(err)
	}
	err = syscall.SetsockoptInt(fd, syscall.SOL_SOCKET, 0x0F, 1) // 0x0F == SO_REUSEPORT
	if err != nil {
		panic(err)
	}

	// 바인딩
	sa := &syscall.SockaddrInet4{Port: 8080}
	copy(sa.Addr[:], net.ParseIP("0.0.0.0").To4())
	err = syscall.Bind(fd, sa)
	if err != nil {
		panic(err)
	}

	// listen 시작
	err = syscall.Listen(fd, syscall.SOMAXCONN)
	if err != nil {
		panic(err)
	}

	file := os.NewFile(uintptr(fd), "listener")
	ln, err := net.FileListener(file)
	if err != nil {
		panic(err)
	}

	fmt.Println("Worker started on", ADDR)

	for {
		conn, err := ln.Accept()
		if err != nil {
			continue
		}
		go func(c net.Conn) {
			defer c.Close()
			c.Write([]byte("Hello from worker!\n"))
		}(conn)
	}
}

```
