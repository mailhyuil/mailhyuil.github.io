# 컬렉션

> Vector, HashMap, String 등이 있다.

## String

```
let s = String::from("hello");

let s = String::new();

let s = "hello".to_string();
```

## 값 추가

> mut을 붙여야한다.

```
let mut s = String::from("hello");

s.push_str("w");

println!("{}", s); // hellow
```

## Vector

```
let mut v = Vec::new();
let v = vec![1,2,3];
```

## HashMap

```
use std::collections::HashMap;
let mut scores = HashMap::new();

scores.insert(String::from("블루"), 10) // (key, value)
scores.insert(String::from("레드"), 50) // (key, value)
```
