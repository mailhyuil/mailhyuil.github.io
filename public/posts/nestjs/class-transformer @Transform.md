## @Transform

```
@Transform(({ value, key, obj, type }) => value)
```

```
@Transform(({ value }) => {
  if (value === null) {
    return {};
  } else {
    return value;
  }
})
```
