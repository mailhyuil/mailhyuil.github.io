# go package Reflect

> 런타임에 동적으로 타입이나 객체의 정보를 다루기 위한 기능
>
> > 동적 프로그래밍이 가능해짐
> >
> > js의 typeof, python의 type() 등이 정적언어인 go에는 없음 reflect고 구현해야한다.
> >
> > > reflect는 성능에 영향을 줄 수 있으므로 타입단언, 타입스위치, 제네릭 등을 사용하여 최대한 피하는 것이 좋다.

## typeof & valueof

```go
// typeof
reflect.TypeOf(val) // int

// valueof
val := reflect.ValueOf(user)
```

## set

> interface 등의 type이 정해지지 않은 경우에 사용
>
> > set은 반드시 포인터여야 함
> >
> > > Elem()으로 꺼낸 값이 settable이어야 함
> > >
> > > > SetXxx()으로 값을 바꿔야 함

```go
func setValue(val interface{}) {
	// 타입 정보 없으니까 reflect 필요함
	v := reflect.ValueOf(val)

	// 값 바꾸려면 반드시 Pointer여야 함
	if v.Kind() == reflect.Ptr {
		elem := v.Elem()
        // Elem()으로 꺼낸 값이 settable이어야 함
		if elem.Kind() == reflect.Int {
			elem.SetInt(99)
		}
	}
}

func main() {
	x := 10
	setValue(&x)
	fmt.Println(x) // 99
}
```
