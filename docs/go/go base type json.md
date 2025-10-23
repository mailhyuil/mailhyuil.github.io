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

## Marshal & Unmarshal (Stringify & Parse)

```go
user := UpdateUser{FirstName: "휴일"}

jsonBytes, _ := json.Marshal(user) // struct를 jsonbytes로 변환 (go에서 모든 io는 byte array로 변환됨, 네트워크 전송도 빠르고, 디스크에 쓰기도 빠르고 압축도 빠름)
jsonStr := string(jsonBytes) // jsonbytes를 string으로 변환

fmt.Println(jsonStr) // {"first_name":"휴일"}

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
