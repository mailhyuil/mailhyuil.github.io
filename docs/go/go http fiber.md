# go http fiber

## install

```sh
go get github.com/gofiber/fiber/v2
```

## usage

```go
package main

import (
	"log"

	"github.com/gofiber/fiber"
)

func main() {
	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) {
		c.Send("Hello, World!")
	})

	log.Fatal(app.Listen(3000))
}
```
