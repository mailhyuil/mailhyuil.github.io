# angular signal input & model

## input

```ts
data = input<string>();

// @Input({required: true}) data!: string;
data = input.required<string>();

// <app-some [hello]="" ></app-some> 로 값을 넘길 때
data = input(0, { alias: "hello" });

// transform
disabled = input(false, {
  transform: (value: boolean | string) => (typeof v === "string" ? v === "" : v),
});
```

## model

> two-way binding
>
> > input과 output을 동시에 사용
> >
> > > [()] 또는 suffix Change를 붙여주면 자동으로 two-way binding이 된다.

### ts

```ts
test = model(false);
```

### html

```html
<!-- 방법 1 -->
<app-test [(test)]="value"></app-test>
<!-- 방법 2 -->
<app-test [test]="value" (testChange)="onChange($event)"></app-test>
```
