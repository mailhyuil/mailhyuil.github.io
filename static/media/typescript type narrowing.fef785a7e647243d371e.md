# type narrowing

## primitive type

```ts
typeof value === "string";
```

## class

```ts
value instanceof SomeDto;
```

## function

```ts
typeof value === "function" && value.name === someFn.name;
```

## interface & reference type

```ts
isSomething(value:any): value is Something {
  // ...validation logic..
  return true
}
```
