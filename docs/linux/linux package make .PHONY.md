# linux package make .PHONY

> `make <command>` 시 command 이름과 같은 파일이 존재하면 실행하지 않음
>
> > .PHONY: 에 정의된 이름은 항상 실행됨

```Makefile
.PHONY: clean test security build run

clean:
 rm -rf $(BUILD_DIR)/*
 rm -rf *.out
security:
 gosec -quiet ./...
test: security
 go test -v -timeout 30s -coverprofile=cover.out -cover ./...
 go tool cover -func=cover.out
swag:
 swag init
build: swag clean
 CGO_ENABLED=0 go build -ldflags="-w -s" -o $(BUILD_DIR)/$(APP_NAME) main.go
run: build
 $(BUILD_DIR)/$(APP_NAME)
```
