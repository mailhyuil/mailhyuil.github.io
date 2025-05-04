# 백준 입출력

## 한 줄 입력

```rs
use std::io::stdin;

fn main() {
	let mut buffer = String::new();
    stdin().read_line(&mut buffer).unwrap();

    println!("{}",buffer);
}
```

## 숫자 입력받기

```rs
use std::io::stdin;

fn main() {
    let mut buffer_a = String::new();
    let mut buffer_b = String::new();

    stdin().read_line(&mut buffer_a).unwrap();
    stdin().read_line(&mut buffer_b).unwrap();

    let A:i32 = buffer_a.trim().parse::<i32>().unwrap();
    let B:i32 = buffer_b.trim().parse::<i32>().unwrap();

    println!("{}", A+B)
}
```

```rs
use std::io;

fn main() {
    let mut s = String::new();
    io::stdin().read_line(&mut s).expect("-1");
    let s1:Vec<usize> = s.split_whitespace().map(|c| c.trim().parse().expect("-1")).collect::<Vec<_>>();
    println!("{}",s1[0] + s1[1]);
}
```

```rs
fn main(){
    let mut buffer: String = String::new();
    std::io::stdin().read_line(&mut buffer).unwrap();

    let result = buffer.trim()
        .split_whitespace()
        .map(|x| x.parse::<i32>().unwrap())
        .sum::<i32>();

    println!("{}",result);
}
```

## 여러 줄 입력

```rs
use std::io::stdin;

fn main() {
	let mut buffer = String::new();
    stdin().read_line(&mut buffer).unwrap();

    let n = buffer.trim().parse::<usize>().unwrap();

    for _ in 0..n {
    	buffer.clear();
        stdin().read_line(&mut buffer).unwrap();

        ...
    }
}
```

## 숫자 여러개 입력받기

```rs
use std::io::{stdin, Read}

fn main() {
	let mut input = String::new();
    stdin().read_to_string(&mut input).unwrap();
    let mut input = input.split_ascii_whitespace().flat_map(str::parse::<usize>);

    let n = input.next().unwrap();
}
//    ... 필요할 때 마다 input.next().unwrap() 호출
```
