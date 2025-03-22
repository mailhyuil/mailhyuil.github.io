# go base type json

> string `json:"keyInJson"` 은 직렬화, 역직렬화 시 어떤 키 이름을 쓸 건지 지정하는 태그(tag)
>
> > json.Marshal() 시 json으로 변환할 때 사용
> >
> > json.Unmarshal() 시 json을 struct로 변환할 때 사용

```go
type UpdateUser struct {
    FirstName string `json:"first_name"`
}
```

## Stringify & Parse

```go
user := UpdateUser{FirstName: "휴일"}

// struct를 jsonbytes로 변환
jsonBytes, _ := json.Marshal(user)
// jsonbytes를 string으로 변환
jsonStr := string(jsonBytes) // {"first_name":"휴일"}
fmt.Println(jsonStr)

// json string을 struct로 변환

var user2 UpdateUser
err := json.Unmarshal([]byte(jsonStr), &user2)

if err != nil {
    fmt.Println("Error:", err)
    return
}

// struct를 출력
fmt.Println(user2) // {휴일}
fmt.Println(user2.FirstName) // 휴일
```
