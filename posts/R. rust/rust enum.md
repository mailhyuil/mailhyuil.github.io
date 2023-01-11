# enum

```
enum IpAddrKind {
    V4,
    V6,
}

IpAddrKind::V4;
IpAddrKind::V6;
```

## 사용법

```
fn route(ip_type: IpAddrKind){}

route(IPAddrKind::V4);
route(IPAddrKind::V6);
```

## 열거값에 데이터 지정

```
enum Message{
    Quit,
    Move{x:i32, y:i32}, // 익명 구조체
    Write(String), // String값
    ChangeColor(i32,i32,i32), // 3개의 i32값
}
```

## Option 열거자

> rust에는 널값이 없다 -> 널포인터에러가 발생하지 않음
>
> > 널 대신 Option 열거자를 사용
> >
> > > Java의 Optional과 비슷

```

```
