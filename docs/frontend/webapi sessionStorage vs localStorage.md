# webapi sessionStorage vs localStorage

> 간단한 text 데이터를 저장할 수 있는 storage

## sessionStorage

> 세션 종료 시 데이터가 삭제된다.
>
> > 브라우저 탭이 닫히거나, 페이지를 새로고침하거나, 브라우저를 종료할 때까지만 데이터가 유지된다.
> >
> > > 사용 예) 단일 세션 내 폼 데이터 임시 저장, 세션 동안의 일시적 인증 정보 저장, 필터 옵션이나 검색 조건 유지..

```js
window.sessionStorage.setItem("key", "value");
window.sessionStorage.getItem("key");
window.sessionStorage.removeItem("key");
```

## localStorage

> 브라우저를 종료해도 데이터가 삭제되지 않는다.
>
> > 사용 예) 장바구니, 로그인 토큰 저장, 임시 데이터 저장

```js
window.localStorage.setItem("key", "value");
window.localStorage.getItem("key");
window.localStorage.removeItem("key");
```
