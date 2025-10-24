# rust base collection

> Vector, HashMap, String 등이 있다.

## String

```rs
let s = String::from("hello");

let s = String::new();

let s = "hello".to_string();
```

## 값 추가

> mut을 붙여야한다.

```rs
let mut s = String::from("hello");

s.push_str("w");

println!("{}", s); // hellow
```

## Vector

```rs
let mut v = Vec::new();
let v = vec![1,2,3];
```

## HashMap

```rs
use std::collections::HashMap;
let mut scores = HashMap::new();

scores.insert(String::from("블루"), 10) // (key, value)
scores.insert(String::from("레드"), 50) // (key, value)
```
