# L7 http headers 보안 CSP Nonce

> Nonce는 한번만 사용되는 임의의 값을 의미하며 매 요청마다 새로운 값을 생성해야한다.
>
> > script, style 태그에 nonce 속성을 추가하고 해당 값이 일치하지 않으면 차단된다.
> >
> > > unsafe-inline, unsafe-eval을 사용하지 않고 script, style을 사용할 수 있다.

## html

```html
<script nonce="randomNonce">
  console.log("hello world");
</script>
```

## CSP

```txt
Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-randomNonce'; style-src 'self' 'nonce-randomNonce';


```

## example

> nonce 값이 1234인 경우

```txt
<script nonce="1234">
  console.log("hello world");
</script>

Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-1234'; style-src 'self' 'nonce-1234';
```
