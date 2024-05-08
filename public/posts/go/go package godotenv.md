# go base env

## install

```sh
go get github.com/joho/godotenv
```

## .env

```sh
S3_BUCKET=Y
SECRET_KEY=X
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

  s3Bucket := os.Getenv("S3_BUCKET")
  secretKey := os.Getenv("SECRET_KEY")
}
```
