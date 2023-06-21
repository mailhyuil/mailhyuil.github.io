# js range map 함수

```js
function mapRange(value, minInput, maxInput, minOutput, maxOutput) {
  return ((value - minInput) * (maxOutput - minOutput)) / (maxInput - minInput) + minOutput;
}
```
