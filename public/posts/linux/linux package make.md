# linux make

> 스크립트 자동화 도구 (package.json의 scripts와 유사)
>
> > 과거에 소프트웨어를 빌드하는데 사용되는 빌드 도구
> >
> > makefile을 통해 빌드 과정을 기술
> >
> > make를 사용하여 Makefile을 읽어서 빌드 과정을 자동으로 수행
> >
> > > 특히 C 및 C++ 프로그램을 컴파일하고 라이브러리를 빌드하는 데 많이 활용

## 설치

```sh
apt install make -y

make <command>
```

## Makefile 빌드 자동화로 사용하기

```Makefile
output.o: main.c foo.h bar.h
	gcc -c main.c
```

## Makefile 스크립트 자동화 도구로 사용하기

```Makefile
.PHONY: clean test security build run

APP_NAME = fiber-go-boilerplate
BUILD_DIR = ./build
MIGRATIONS_FOLDER = ./platform/migrations
DB_NAME = fiber_go_api
DB_USER = dev
DB_PASS = dev
DATABASE_URL = postgres://$(DB_USER):$(DB_PASS)@localhost/$(DB_NAME)?sslmode=disable

clean:
	rm -rf $(BUILD_DIR)/*
	rm -rf *.out

security:
	gosec -quiet ./...

test: security
	go test -v -timeout 30s -coverprofile=cover.out -cover ./...
	go tool cover -func=cover.out

build: swag clean
	CGO_ENABLED=0 go build -ldflags="-w -s" -o $(BUILD_DIR)/$(APP_NAME) main.go

run: build
	$(BUILD_DIR)/$(APP_NAME)
```
