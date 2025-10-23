# 기초

> iterator, collection, 스칼라 타입, 컴파운드 타입을 잘 구분해라

## 변수의 불변성

> rust의 변수는 기본적으로 불변이다
>
> > 변수를 가변으로 만드려면 mut 키워드를 써준다

```rs
fn main() {
    let mut x = 1;
    println!("x의 값 {}",x);
    x = 2;
    println!("x의 값 {}",x);
}
```

## 변수와 상수의 차이점

> 변수는 불변 속성으로 지정할 수 있지만
>
> > 상수는 항상 불변이다
> >
> > > 변수 : let 상수 : const

## 변수 가리기 (shandowed)

> 선언한 변수를 다시 재선언 하는 것
>
> > 전에 선언된 변수는
> >
> > > mut의 대안

```rs
let space = "   ";
let space = spaces.len();
```

## 표준 라이브러리

```rs
std::*
```
