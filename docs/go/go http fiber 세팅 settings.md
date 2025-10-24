# go http fiber 세팅 settings

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
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/recover"
	"github.com/gofiber/fiber/v2/middleware/compress"
	"github.com/gofiber/fiber/v2/middleware/helmet"
	"github.com/gofiber/fiber/v2/middleware/limiter"
	"github.com/gofiber/fiber/v2/middleware/etag"
	"github.com/gofiber/fiber/v2/middleware/cache"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()

	if err != nil {
	  log.Fatal("Error loading .env file")
	}

    app := fiber.New()

	/** Recover Settings */
	/** - Recover middleware handles panics and sends a 500 response */
	/** - It also logs the error to the console */
	app.Use(recover.New())
	/** CORS Settings */
	app.Use(cors.New())
	/** Logger */
	app.Use(logger.New())
	/** helmet */
	app.Use(helmet.New())
	/** Compress */
	app.Use(compress.New())
	/** Rate Limiter */
	app.Use(limiter.New())
	/** Etag */
	app.Use(etag.New())
	/** Cache */
	app.Use(cache.New())
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

    log.Fatal(app.Listen(port))
}
```
