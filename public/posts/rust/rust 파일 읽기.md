# 파일 읽기

```rs
use std::fs;

fn main() {
    let s = fs::read_to_string("./hello.txt").expect("파일을 찾을 수 없습니다.");
    println!("{}",s)
}
```
