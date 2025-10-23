# grpc proto

## primitive types

```txt
string
bool
bytes
double
float
int32
fixed32
...
```

## 배열 (repeated)

```txt
repeated string # string array
```

## 구조체 / object (message)

```txt
message Person {
  string name = 1;
  int32 id = 2;
  bool is_student = 3;
}

message Person
```

## optional

```txt
optional string name = 1;
```

## map

```txt
map<string, string> phone_number = 1;
```

## enum (열거형)

```txt
enum PhoneType {
  MOBILE = 0;
  HOME = 1;
  WORK = 2;
}
```

## reserved (예약어)

> 향후 사용하지 않을 필드나, 삭제된 필드를 예약하는 역할

```txt
reserved 2, 15, 9 to 11, 40 to max;
reserved "email", "tel"
```

# option

> 옵션을 정의

```txt
option java_package = "com.example.mypackage";
option go_package = "github.com/example/mypackage";
```
