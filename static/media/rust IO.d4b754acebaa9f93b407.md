# rust IO

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
