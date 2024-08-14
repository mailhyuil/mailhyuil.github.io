# postgres index

> row_id와 page id를 가지고 있어서 원하는 row를 가진 page에 빠르게 접근할 수 있다.
>
> > postgres의 모든 index는 secondary index이다.
> >
> > All indexes in PostgreSQL are secondary indexes (postgresql doc)

## example

```txt
index                     heap
1(row_id:2, page_id:1) => page:1(row:1, row:2, row:3), page:2(row:4, row:5, row:6)
```
