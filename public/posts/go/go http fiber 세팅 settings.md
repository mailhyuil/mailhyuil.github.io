# go fiber

## install

```sh
# fiber
go get github.com/gofiber/fiber/v2

# dotenv
go get github.com/joho/godotenv
```

## usage

```go
package main

import (
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()

	if err != nil {
	  log.Fatal("Error loading .env file")
	}

    app := fiber.New()
	/** CORS Settings */
	app.Use(cors.New())
	/** Json Guard */
	app.Use(func (c *fiber.Ctx) error {
        if c.Is("json") {
            return c.Next()
        }
        return c.SendString("Only JSON allowed!")
    })

	/** Handlers */
    app.Get("/", func (c *fiber.Ctx) error {
        return c.SendString("Hello, World!")
    })

	port := os.Getenv("PORT")

	if port == "" {
		port = ":3000"
	}

    log.Fatal(app.Listen(port ))
}
```
