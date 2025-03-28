# 에러처리

> rust에는 예외가 없다
>
> > 러스트는 회복 가능한 에러, 회복이 불가능한 에러로 나눈다.

## 회복 가능한 에러 (recoverable error)

### Result<T, E>

## 회복 불가능한 에러 (unrecoverable error)

### panic!

## unwrap() && expect()

> 결과에 따라 Result와 panic!을 알아서 처리
>
> > expect는 panic!에 스트링을 보내줄 수 있음
