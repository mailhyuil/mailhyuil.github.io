# rust base class struct - interface

> 클래스와 비슷하다

```rs
struct User{
    username:String,
    email:String,
    active:bool
}

// 인스턴스 생성
let user1:User = User {
    username:String::from("sb"),
    email:String::from("mailhyuil@gmail.com"),
    active:true
}
```

## .. 문법

> 명시적으로 나열하지 않은 나머지 필드는 기존의 인스턴스의 필드와 같은 값을 사용하라

```rs
let user1:User = User{
    username:String::from("bs"),
    ..user1
}
```

## 튜플 구조체

> 튜플과 비슷한 구조체
>
> > 구조체에는 이름을 부여하지만 필드에는 부여하지 않음
> >
> > > RGB값(r,g,b)이나 좌표값(x, y) 같은 구조에 사용

```rs
struct Color(i32,i32,i32);

let blue = Color(0,0,255);
```

## 메서드 문법

> 구조체 내에 메소드를 정의하려면 impl을 사용

```rs
struct User {
    username:String,
    email:String,
    active:bool
}

impl User {
    fn hi(){
        println!("hi")
    }

    fn hello(){
        println!("hello")
    }
}
// impl 블록을 분리해서 선언해도 된다.

User::hi();
User::hello();
```
