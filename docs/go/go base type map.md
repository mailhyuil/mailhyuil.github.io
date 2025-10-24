# go base type map

> map[key]value{} 형태로 사용한다.
>
> > 접근 시 기본으로 value, ok를 리턴한다.

```go
// literal로 생성
hyuilMap := map[string]string{
  "name": "hyuil",
  "age": "3",
}

// make로 생성
hyuilMap := make(map[string]string) // 길이 0인 map 생성
hyuilMap := make(map[string]string, 10) // 길이 0, 용량 10인 map 생성

// for range
for key, value := range hyuilMap {
  fmt.Println(key, value)
}

// 값 접근
value, ok := hyuilMap["name"]

// 값 변경
hyuilMap["name"] = "hyuil2"

// 값 추가
hyuilMap["name2"] = "hyuil3"

// 값 삭제
delete(hyuilMap, "name")

// 값이 없으면 "" 리턴
println(hyuilMap["name"])

// 길이 확인
len(hyuilMap)
```
