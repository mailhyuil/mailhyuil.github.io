# GraphQL

> REST API는 서버에서 쿼리를 작성하지만
>
> > GraphQL은 클라이언트에서 쿼리를 작성한다.

## REST의 문제점

### over-fetching

> 필요없는 너무 많이 많은 데이터를 받는 것
>
> > graphQL은 필요한 '데이터'를 요청하기에 overFetching할 일이 없다.
> >
> > > you will get only what you asked for

### under-fetching

> 우리가 필요한 데이터보다 덜 받는 것
>
> > (e.g. 필요한 데이터의 id만 받는 경우 다시 요청해야한다.)
