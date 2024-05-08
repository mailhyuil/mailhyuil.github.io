# go package pgx

## install

```sh
go get github.com/jackc/pgx
```

## usage

```go
package main

import (
    "context"
    "fmt"
    "log"
    "os"
    "time"

    "github.com/jackc/pgx/v4"
)

func main() {
    conn, err := pgx.Connect(context.Background(), os.Getenv("DATABASE_URL"))
    if err != nil {
        log.Fatalf("Unable to connect to database: %v\n", err)
    }
    defer conn.Close(context.Background())

    var greeting string
    err = conn.QueryRow(context.Background(), "select 'hello world'").Scan(&greeting)
    if err != nil {
        log.Fatalf("QueryRow failed: %v\n", err)
    }
    fmt.Println(greeting)

    rows, err := conn.Query(context.Background(), "select * from users")
    if err != nil {
        log.Fatalf("Query failed: %v\n", err)
    }
    defer rows.Close()

    for rows.Next() {
        var id int
        var name string
        var email string
        var created_at time.Time
        err = rows.Scan(&id, &name, &email, &created_at)
        if err != nil {
            log.Fatalf("Scan failed: %v\n", err)
        }
        fmt.Println(id, name, email, created_at)
    }
}
```
