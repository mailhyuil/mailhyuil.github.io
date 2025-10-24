# L7 http headers 보안 공격 XSS

> 사용자의 앱에 악성 스크립트를 삽입하여 사용자의 정보를 탈취하는 공격
>
> > CSRF와 달리 앱에 직접 스크립트를 삽입하여 공격한다.
> >
> > > XSS가 발생할 수 있는 string은 반드시 sanitize를 해야한다.
> > >
> > > > CSP(Content Security Policy)를 사용하여 XSS를 방지할 수 있다. (e.g. inline script를 차단)

## 시나리오

```txt
1. 관리자 페이지의 공지사항의 내용에 script를 삽입
2. 사용자의 앱에서 innerHtml, document.write(), eval()을 사용하고 sanitize를 하지 않아 script가 실행 됨

1. url의 query string에 script를 삽입
2. 사용자의 앱에서 url의 query string을 innerHtml, document.write(), eval()을 사용하고 sanitize를 하지 않아 script가 실행 됨

1. 이벤트의 함수에 script를 삽입
2. 사용자의 앱에서 이벤트의 함수를 innerHtml, document.write(), eval()을 사용하고 sanitize를 하지 않아 script가 실행 됨
```

## 해커가 노리는 정보

```txt
1. 세션 (localStorage, sessionStorage, cookie, Authorization Header)
window.localStorage
window.sessionStorage
document.cookie

2. 사용자 로그인 정보
document.querySelector("input[type=password]").value

3. 브라우저 히스토리
window.history

4. 클립보드 데이터
navigator.clipboard.readText()

4. 네트워크 요청 데이터
XMLHttpRequest.prototype.open

5. 웹캠 및 마이크 접근
navigator.mediaDevices.getUserMedia()

6. 사용자 위치 정보
navigator.geolocation.getCurrentPosition()

7. 브라우저 환경
navigator.userAgent
window.screen
```

## XSS 공격 코드

```js
const content = '<img src="x" onerror="alert(\'XSS 공격 성공!\')" />';
document.getElementById("content").innerHTML = content;

const style = "background-image: url(\"javascript:alert('XSS 공격 성공!')\")";
const url = "javascript:alert('XSS 공격 성공!')";
const resourceUrl = "javascript:alert('XSS 공격 성공!')";
```
