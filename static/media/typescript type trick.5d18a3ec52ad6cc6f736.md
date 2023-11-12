# typescript type trick

## 받은 프로퍼티에 따라 타입을 다르게 하고 싶을 때

```ts
type Props = {
  name: string;
} & (
  | {
      gender: "male";
      salary: number;
    }
  | {
      gender: "female";
      weight: number;
    }
);

type Props = {
  name: string;
} & (MaleProps | FemaleProps);
```
