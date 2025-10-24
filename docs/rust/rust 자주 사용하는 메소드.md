# 러스트 자주 사용하는 메소드

```rust
read_line(buffer)
trim()
split_whitespace()
split_ascii_whitespace()
parse() // parse::<자료형>()
collect() // collect::<자료형>()
enumerate()
.chars() // String -> core::str::iter::Chars
print_type_of(&s); // type 프린트
```

## read_line(buffer)

## trim()

## parse()

> `parse::<i32>();` 형태로 사용

## split_whitespace()

## split_ascii_whitespace()

## iter()

> iterator 반복자를 사용하려면 iter()를 사용

## sum()

## collect()

> iterator를 모아준다!!
>
> > `<String>`이면 단일 String으로
> >
> > > `<Vec>`이면 Vec으로 모아준다

```rs
let v = vec![1,2,3,4,54];

let new_v = v.iter().map(|x|{
    println!("hi");
    x+1});

for i in new_v{
    println!("{}", i)
}
```

```rs
let v = vec![1,2,3,4,54];

let new_v = v.iter().map(|x|{
    println!("hi");
    x+1}).collect::<Vec<i32>>();

for i in new_v{
    println!("{}", i)
}
```

## enumerate()

## thread::sleep(Duration::from_secs(2));

## String.chars().count() == 문자열 길이

## String::push()

## String::push_str()

## format!("{}",str)
