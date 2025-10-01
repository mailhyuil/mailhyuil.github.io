# redis base transaction WATCH & MULTI & EXEC

> MULTI & EXEC로 명령어를 하나의 transaction으로 묶을 수 있다.
>
> > pipeline과 비슷하지만 pipeline은 순서가 보장되지 않고 중간에 다른 client의 명령이 끼어들 수 있다.
> >
> > > MULTI & EXEC는 순서를 보장한다.
> > >
> > > > 다른 데이터베이스와는 다르게 redis의 트랜잭션은 rollback을 지원하지 않는다.
> > > >
> > > > > WATCH & MULTI를 사용하면 해당 connection은 오직 그 transaction이 점유하게된다.

## MULTI & EXEC

```sh
MULTI
SET color red
SET count 2
EXEC
```

## WATCH & MULTI & EXEC

> WATCH가 실행된 시점에서부터 key가 변경된 이후로 실행된 transaction은 실패한다.

```sh
WATCH color

SET color blue

MULTI
SET color red
SET count 2
EXEC # fail
```

## 문제점

> 값이 바뀌면 "무조건" 실패
>
> > 유효한 변경이라도 실패한다.
