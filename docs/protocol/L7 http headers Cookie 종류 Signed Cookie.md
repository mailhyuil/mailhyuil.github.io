# browser Cookie 종류 Signed Cookie

> 시크릿을 사용해서 시그니처를 생성한 쿠키
>
> > 클라이언트에서 쿠키의 값은 볼 수 있지만 서버에서 이 쿠키가 modified 되었는지 확인할 수 있다.

```
The cookie will still be visible, but it has a signature, so it can detect if the client modified the cookie.

It works by creating a HMAC of the value (current cookie), and base64 encoded it. When the cookie gets read, it recalculates the signature and makes sure that it matches the signature attached to it.

If it does not match, then it will give an error.

If you want to hide the contents of the cookie as well, you should encrypt it instead (or just stores it in the server side session). I'm not sure if there is middleware for that already out there or not.
```

```ts
// Set Signed Cookie
res.cookie("name", "value", { signed: true });

// Get Signed Cookie
req.signedCookies["name"];
```
