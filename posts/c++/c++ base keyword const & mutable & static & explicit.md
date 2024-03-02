# c++ const & mutable & static & explicit

## const

> 상수화 시키는 키워드
>
> > 값을 변경할 수 없게 만든다.
> >
> > > 인자로 받는 변수의 내용을 함수 내부에서 바꾸지 않는다면 앞에 const 를 붙여 주는 것이 바람직합니다.

```cpp
const int a = 10; // 상수화된 변수

void func () const {
  // 상수화된 함수
  // 이 함수 내에서는 멤버 변수를 변경할 수 없다.
}

void func (const int a) {
  // 인자로 받는 변수의 내용을 함수 내부에서 바꾸지 않는다면 앞에 const 를 붙여 주는 것이 바람직합니다.
}
```

## mutable

> const 함수 내에서 멤버 변수를 변경해야 할 때 사용하는 키워드
>
> > getUserInfo는 const 함수이지만, cache를 변경해야 한다.

```cpp
class Server {
  mutable Cache cache;

  User getUserInfo(const int user_id) const {
    // 1. 캐쉬에서 user_id 를 검색
    Data user_data = cache.find(user_id);
    // 2. 하지만 캐쉬에 데이터가 없다면 데이터베이스에 요청
    if (!user_data) {
      user_data = Database.find(user_id);
      // 그 후 캐쉬에 user_data 등록
      cache.update(user_id, user_data); // <-- 불가능
    }
    // 3. 리턴된 정보로 User 객체 생성
    return User(user_data);
  }
};
```

## static

```cpp

```

## explicit

```cpp
explicit A (int a) {
  // 생성자
  // 이 생성자는 int 타입의 변수를 받아들인다.
}

A a = 10; // 이 코드는 에러가 발생한다.
A a = A(10); // 이 코드는 정상적으로 작동한다.
```
