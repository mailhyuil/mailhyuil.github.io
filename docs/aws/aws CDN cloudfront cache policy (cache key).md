# aws cloudfront cache policy

> Cache Key란 캐시된 모든 오브젝트가 가지고 있는 유니크한 키
>
> > hostname + resource url의 일부분의 조합으로 이루어짐
> >
> > > Cache Policy란 Cache Key에 무엇을 포함할지를 정의하는 정책
> > >
> > > cloudfront -> behavior -> create cache policy
> > >
> > > > Cache Key에 많은게 포함될수록 캐시가 적게 되므로 성능이 떨어짐

## None

> 쿼리스트링 x

## Whitelist

> whitelist에 포함된 쿼리스트링을 Cache Key에 포함

## Include All-Except

> specified list에 없는 모든 쿼리스트링을 Cache Key에 포함

## All

> 모든 쿼리스트링을 Cache Key에 포함
>
> > 가장 성능이 떨어짐
