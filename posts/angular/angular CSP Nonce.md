# angular CSP Nonce

> unsafe-inline, unsafe-eval을 사용하면 XSS 공격에 취약하기 때문에 이를 방지하기 위해서 nonce를 사용하여 보안을 강화한다.
>
> > ngCspNonce에 nonce 이름을 추가한다.
> >
> > > CSP_NONCE에 Nonce 값을 입력하면 자동으로 angular가 CSP에 nonce를 추가한다.

## nonce.generator.ts

```ts
import { randomBytes } from "crypto";

function generateNonce(): string {
  return randomBytes(16).toString("base64");
}
const randomNonce = generateNonce();

export { randomNonce };
```

## index.html

```html
<app-root ngCspNonce="randomNonce"></app-root>
```

## provider

> angular가 nonce를 추가해준다.

```ts
import {CSP_NONCE} from '@angular/core';
import { randomNonce } from './nonce.generator';
{
  provide: CSP_NONCE,
  useValue: randomNonce
}
```

## index.html (CSP 설정)

> provider에서 받은 nonce를 randomNonce text와 바꿔치기 해준다.

```html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; style-src 'self' 'nonce-randomNonce'; script-src 'self' 'nonce-randomNonce';"
/>
```
