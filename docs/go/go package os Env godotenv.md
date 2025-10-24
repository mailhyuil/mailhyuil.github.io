# go package os Env godotenv

## install

```sh
go get github.com/joho/godotenv
```

## .env

```sh
PORT=3000
SECRET_KEY=XXXXX
```

## usage

```go
package main

import (
    "log"
    "os"

    "github.com/joho/godotenv"
)

func main() {

  err := godotenv.Load()

  if err != nil {
    log.Fatal("Error loading .env file")
  }

  port := os.Getenv("PORT")
  secretKey := os.Getenv("SECRET_KEY")
}
```
