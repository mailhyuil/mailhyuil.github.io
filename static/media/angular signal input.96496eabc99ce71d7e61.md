# angular signal input

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
