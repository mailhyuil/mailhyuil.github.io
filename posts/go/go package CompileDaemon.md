# go package CompileDaemon

## install

```sh
go install github.com/githubnemo/CompileDaemon@latest
```

## usage

```sh
CompileDaemon \
  -exclude-dir=.git \
  -exclude-dir=docs \
  -graceful-kill=true \
  -build="go build" \
  -command="./build/myapp"
```
