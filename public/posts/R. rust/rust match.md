# match

> 흐름 제어 연산자
>
> > 일련의 패턴과 값을 비교해 일치하는 패턴에 지정된 코드를 실행

```rs
enum Coin {
    Penny,
    Nickel,
    Dime,
    Quarter,
}

fn value_in_cents(coin: Coin) -> u32 {
    match coin {
        Coin::Penny => {
            println!("Lucky penny!");
            1
        },
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter => 25,
    }
}
```

## 자리지정자 \_

> default와 비슷

```rs
let some_u8_value = 0u8;

match some_u8_value {
    1 => println!("one"),
    3 => println!("three"),
    5 => println!("five"),
    7 => println!("seven"),
    _ => (),
}
```

## if let 제어 문법

> 한가지 경우만 처리하고 싶은 경우 사용
