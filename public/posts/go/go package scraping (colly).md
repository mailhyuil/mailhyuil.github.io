# go package scraping (colly)

## install

```sh
go get github.com/gocolly/colly/v2
```

## usage

```go
import (
		"fmt"

		"github.com/gocolly/colly"
		)


func Scrap() {
	baseUrl := "https://www.example.com/news/stock/?page="
	collector := colly.NewCollector(colly.Async(true))
	collector.OnHTML("dl .article_list", func(e *colly.HTMLElement) {
		title := e.ChildText("a")
        description := e.ChildText("span .desctxt")
        fmt.Println(title, description)
	})

	for i := 0; i <= 10; i++ {
		collector.Visit(baseUrl + strconv.Itoa(i))
	}

	collector.Wait()
}
```
