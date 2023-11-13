# typescript template literal type

> template literal를 활용해 반복되는 타입정의를 쉽게할 수 있다.

```ts
type Toss = "toss";

// type TossPayments = 'toss payments';
type TossPayments = `${Toss} payments`;
```

```ts
type Toss = "toss";
type Companies = "core" | "bank" | "securities" | "payments" | "insurance";

// type TossCompanies = 'toss core' | 'toss bank' | 'toss securities' | ...;
type TossCompanies = `${Toss} ${Companies}`;
```

```ts
type VerticalAlignment = "top" | "middle" | "bottom";
type HorizontalAlignment = "left" | "center" | "right";

// type Alignment =
//   | "top-left"    | "top-center"    | "top-right"
//   | "middle-left" | "middle-center" | "middle-right"
//   | "bottom-left" | "bottom-center" | "bottom-right"
type Alignment = `${VerticalAlignment}-${HorizontalAlignment}`;
```
