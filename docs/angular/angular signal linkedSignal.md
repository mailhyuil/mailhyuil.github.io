# angular signal linkedSignal

> computed와 비슷한 기능을 하는 signal
>
> > 다른 signal을 set하여 linkedSignal을 업데이트 할 수 있다.

```ts
const shippingOptions = signal(["Ground", "Air", "Sea"]);
const selectedOption = linkedSignal(() => shippingOptions()[0]);
console.log(selectedOption()); // 'Ground'
selectedOption.set(shippingOptions()[2]);
console.log(selectedOption()); // 'Sea'
shippingOptions.set(["Email", "Will Call", "Postal service"]);
console.log(selectedOption()); // 'Email'
```
