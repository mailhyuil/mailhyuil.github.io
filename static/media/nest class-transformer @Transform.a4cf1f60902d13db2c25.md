## @Transform

```ts
@Transform(({ value, key, obj, type }) => value)
```

```ts
@Transform(({ value }) => {
  if (value === null) {
    return {};
  } else {
    return value;
  }
})
```
