# go package template text

```go
package main

import (
	"os"
	"text/template"
)

func main() {
	// 템플릿 생성
	tmpl, err := template.New("example").Parse("Hello, {{.Name}}!")
	if err != nil {
		panic(err)
	}

	// 데이터
	data := struct {
		Name string
	}{
		Name: "Gopher",
	}

	// 템플릿에 데이터 적용하여 출력
	err = tmpl.Execute(os.Stdout, data)
	if err != nil {
		panic(err)
	}
}
```
