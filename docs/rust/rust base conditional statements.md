# rust base conditional statements

## if

> 참조와 값은 비교할 수 없다. 역참조 연산자를 사용하자 (e.g. \*x == 3)

```rs
if number < 5 {
    ...
} else if number < 3 {
    ...
} else {
    ...
}
```

### let 구문에서도 사용 가능

```rs
let condition = true;
let number = if condition {
    5
} else {
    1
}
```

## loop

> 루프를 중지하라고 명시하지 않는 한 계속 반복
>
> > break를 사용하면 빠져나옴

```rs
let mut counter = 0;

loop {
    counter += 1;
    if counter == 10 {
        break counter * 2;
    }
}
```

## while

```rs
while number <= 10 {
    ...
}
```

## for

```rs
let a = [1,2,3,4,5];

for e in a {
    ...
}

for e in a.iter() {
    ...
}
```

```rs
for number in 1..4 {
    ...
}

for number in (1..4).rev() {
    ...
}
```
