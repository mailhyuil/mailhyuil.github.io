# rust package testing

## 테스트 파일 생성

```sh
cargo new adder --lib
```

## test annotation

```rs
#[cfg(test)]
mod tests{
    #[test]
    fn it_works(){
        assert_eq!(2+2, 4);
    }
}
```

## 실행

```sh
cargo test
```

## test method

- assert();
