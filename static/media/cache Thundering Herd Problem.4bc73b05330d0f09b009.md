# cache Thundering Herd Problem

> 캐시에 데이터 없고 동시에 많은 요청이 발생할 경우
>
> > 동일한 요청에 대해 모두 Cache Miss가 발생
> >
> > > 캐시는 요청을 처리하기 위해 원본 서버에 요청을 모두 보내게 된다. (결국 캐시가 무용지물이 되는 상황)

## 해결법

> 하나의 cache-miss만 원본 서버로 요청하고 나머지는 대기하도록 한다.

## 방지법

> 캐시의 유효기간이 같은 경우
>
> > 동시에 모든 캐시가 사라져버려서 동시에 원본 서버로 요청이 발생할 수 있다.
> >
> > > 캐시의 유효기간을 다르게 설정해야한다.

```js
/* + - 2 분 */
const ttl = 3600 + Math.random() * 120;
```