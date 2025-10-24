# x Simplify Conditional Expressions

1. Decompose Conditional

```ts
// const isSummer = date.before(SUMMER_START) || date.after(SUMMER_END)
if (isSummer(date)) {
  charge = summerCharge(quantity); // quantity * winterRate + winterServiceCharge;
} else {
  charge = winterCharge(quantity); // quantity * summerRate;
}
```
