# db index mysql vs postgres

## MySQL

> MySQL은 B+ tree 인덱스를 사용한다.
>
> > id가 int인 경우 빠르다.

## Postgres

> Postgres는 B tree 인덱스를 사용한다. (postgres의 B tree는 B+ tree와 유사하다)
>
> > id가 int든 string이든 상관없다.
