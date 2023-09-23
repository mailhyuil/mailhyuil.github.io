# cookie & localStorage

## cookie

### 장점

> XSS 공격으로부터 localStorage에 비해 안전하다.
>
> > 쿠키의 httpOnly 옵션을 사용하면 Js에서 쿠키에 접근 자체가 불가능하다.

### 단점

> CSRF 공격에 취약하다.
>
> > 자동으로 http request에 담아서 보내기 때문
> >
> > > 공격자가 request url만 안다면 사용자가 관련 link를 클릭하도록 유도하여 request를 위조하기 쉽다.

## localStorage

### 장점

> CSRF 공격에는 안전하다.
>
> > 자동으로 request에 담기는 쿠키와는 다르게
> >
> > > js 코드에 의해 헤더에 담기므로 XSS를 뚫지 않는 이상
> > >
> > > > 공격자가 정상적인 사용자인 척 request를 보내기가 어렵다.

### 단점

> XSS에 취약하다.
>
> > 공격자가 localStorage에 접근하는 Js 코드 한 줄만 주입하면
> >
> > > localStorage를 공격자가 내 집처럼 드나들 수 있다.

## 해결법

> refresh token 사용
