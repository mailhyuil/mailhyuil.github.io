# test

## 테스트 파일 생성

```
cargo new adder --lib
```

## test annotation

```
#[cfg(test)]
mod tests{
    #[test]
    fn it_works(){
        assert_eq!(2+2, 4);
    }
}
```

## 실행

```
cargo test
```

## test method

- assert();
