# angular animation auto-animate

## install

```sh
npm i @formkit/auto-animate
npm i ng-auto-animate
```

## import

```js
imports: [NgAutoAnimateDirective],
```

## html

> 감싸는 container에 auto-animate directive 넣기

```html
<div auto-animate>
  <p *ngIf="isOpen"> content </p>
</div>
<button (click)="isOpen=!isOpen">animate</button>
```
