# angular DomSanitizer SafeHtml

> angular는 기본으로 모든 xss 공격에 대한 sanitize를 제공한다.
>
> > 하지만 이로 인해 innerHtml을 사용 시 style이 적용되지 않는 문제가 발생한다.
> >
> > > 이를 해결하기 위해서 DomSanitizer의 bypassSecurityTrustHtml를 만들어 사용하는 사람들이 있다. (이는 XSS 공격에 매우 쉽게 노출된다. 절대 사용하지 말기!)
> > >
> > > bypassSecurityTrustHtml를 사용해도 angular는 기본으로 script를 실행하지 않는다.
> > >
> > > 하지만 img 태그의 onerror 같은 속성을 사용하여 xss 공격을 할 수 있다.
> > >
> > > > quill같은 라이브러리는 내부에 sanitize를 제공하지만 이 역시 브라우저에서 직접 fetch를 하는 방법으로 우회하여 script를 심을 수 있다.

## safe-html.pipe.ts

```ts
import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: "safeHtml",
  standalone: true,
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(html: string) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
```

## XSS 공격 코드

```ts
this.safeContent = this.sanitizer.bypassSecurityTrustHtml('<img src="x" onerror="alert(\'XSS 공격 성공!\')" />');
```

## DomPurifier 사용하기

### install

```sh
npm i dompurify
```

### sanitized-html.pipe.ts

```ts
import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import DOMPurify from "dompurify";

@Pipe({
  name: "sanitizedHtml",
  standalone: true,
})
export class SanitizedHtmlPipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) {}

  public transform(value: string) {
    const sanitizedContent = DOMPurify.sanitize(value);
    return this.sanitizer.bypassSecurityTrustHtml(sanitizedContent);
  }
}
```
