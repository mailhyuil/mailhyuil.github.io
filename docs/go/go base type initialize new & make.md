# go base type initialize new & make

> go에서는 객체를 생성할 때 new와 make를 사용한다.

## new

> 타입의 포인터를 반환
>
> > zero value로 초기화된 메모리를 할당 (value가 없음)
> >
> > > struct나 기본 타입(int, float..)에 사용

## make

> 타입 그 자체를 반환 (포인터 아님)
>
> > 내부 구조 초기화를 해줘야 작동이 가능
> >
> > > slice, map, channel에만 사용 가능

```go
package main

import "fmt"

func main() {
    // new는 메모리를 할당하고 0으로 초기화한 후
    // 메모리 주소를 반환한다.
    p := new(int)
    fmt.Println(*p) // 0

    // make는 초기화된 값을 반환한다.
    // slice, map, channel을 생성할 때 사용한다.
    s := make([]int, 0)
    fmt.Println(s) // []
}
```
