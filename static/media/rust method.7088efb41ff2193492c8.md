# rust method

## read_line(buffer)

## trim()

## parse()

> parse::<i32>(); 형태로 사용

## split_whitespace()

## split_ascii_whitespace()

## iter()

> iterator 반복자를 사용하려면 iter()를 사용

## sum()

## collect()

> iter().map()을 하면 iter에 map의 로직이 들어간다.
>
> > 뒤에 collect()를 해주면 실행이 된 뒤에 들어간다.

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
