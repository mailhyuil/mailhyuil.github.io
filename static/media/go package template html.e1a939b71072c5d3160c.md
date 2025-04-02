# go package template html

```go
package main

import (
	"html/template"
	"os"
)

func main() {
	// HTML 템플릿 정의
	htmlTemplate := `
<!DOCTYPE html>
<html>
<head>
    <title>Hello</title>
</head>
<body>
    <h1>Hello, {{.Name}}!</h1>
</body>
</html>`

	// HTML 템플릿 파싱
	tmpl, err := template.New("example").Parse(htmlTemplate)
	if err != nil {
		panic(err)
	}

	// 데이터 정의
	data := struct {
		Name string
	}{
		Name: "Gopher",
	}

	// 템플릿에 데이터를 적용하여 출력
	err = tmpl.Execute(os.Stdout, data)
	if err != nil {
		panic(err)
	}
}
```
