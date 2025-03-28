# go base array & slice

> array: [num]type{}
>
> slice(list): []type{}

## array

```go
// array
arr := [3]string{"hyuil", "sb", "nico"}
fmt.Println(arr)
```

## slice

> list와 같은 개념
>
> > 동적으로 크기가 변할 수 있는 배열
> >
> > > slice는 type, length, capacity를 가진다.
> > >
> > > length은 현재 slice의 길이
> > >
> > > capacity는 slice의 최대 길이
> > >
> > > capacity를 초과하면 새로운 slice를 생성하고, 기존 slice의 값을 복사한다.

```go
// make로 생성 // make(type, length, capacity)
slice := make([]string, 3) // 길이 3인 slice 생성
slice := make([]string, 3, 5) // 길이 3, 용량 5인 slice 생성

// literal로 생성
slice := []string{"hyuil", "sb", "nico"} // 길이 3, 용량 3인 slice 생성

// 요소 추가
newSlice := append(slice, "june")

// 요소 삭제
newSlice = append(newSlice[:i], newSlice[i+1:]...) // i번 인덱스 삭제

// 요소 수정
newSlice[0] = "hyuil"

// 슬라이싱
newSlice = newSlice[1:3] // 1번 인덱스부터 3번 인덱스까지 슬라이싱
newSlice = newSlice[:2] // 0번 인덱스부터 2번 인덱스까지 슬라이싱
newSlice = newSlice[1:] // 1번 인덱스부터 끝까지 슬라이싱

// for range
for i, v := range newSlice {
    fmt.Println(i, v)
}

// spread
fmt.Println(newSlice...)
```
