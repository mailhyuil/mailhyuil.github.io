# go http fiber validator

## install

```sh
go get github.com/go-playground/validator/v10
```

## dto

```go
type User struct {
    FirstName string `json:"first_name" validate:"required,lte=100"`
}
// required: 필수
// lte: 최대 길이
// min
// email
// url
// ...
```

## main.go

```go
validate := validator.New()
user := User{FirstName: ""}

err := validate.Struct(user)
if err != nil {
	fmt.Println("검증 에러 발생!", err)
}
```
