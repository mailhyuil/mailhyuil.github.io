# rust base type enum

```rs
enum IpAddrKind {
    V4,
    V6,
}

IpAddrKind::V4;
IpAddrKind::V6;
```

## usage

```rs
fn route(ip_type: IpAddrKind){}

route(IPAddrKind::V4);
route(IPAddrKind::V6);
```

## 열거값에 데이터 지정

```rs
enum Message{
    Quit,
    Move{x:i32, y:i32}, // 익명 구조체
    Write(String), // String값
    ChangeColor(i32,i32,i32), // 3개의 i32값
}
```
