# Promise sleep

```ts
const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Delaying...');
      resolve();
    }, ms);
  });
};
```
