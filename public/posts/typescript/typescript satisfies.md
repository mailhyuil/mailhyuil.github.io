# typescript satisfies

## before

```ts
const palette: Record<"red" | "green" | "blue", [number, number, number] | string> = {
  red: [255, 0, 0],
  green: "#00ff00",
  bleu: [0, 0, 255], // blue 오타
};
```

## after (satisfies)

```ts
const palette = {
  red: [255, 0, 0],
  green: "#00ff00",
  bleu: [0, 0, 255], // blue 오타
} satisfies Record<"red" | "green" | "blue", [number, number, number] | string>;
```
