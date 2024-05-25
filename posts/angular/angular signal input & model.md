# angular signal input

## input

```ts
// @Input() data?: string;
data = input<string>();

// @Input({required: true}) data!: string;
data = input.required<string>();

// alias
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
> > > suffix Change를 붙여주면 자동으로 two-way binding이 된다.

### ts

```ts
checked = model(false);
```

### html

```ts
@Component({
  template: '<custom-checkbox [(checked)]="isAdmin" />',
})
export class UserProfile {
  protected isAdmin = signal(false);
}
```
