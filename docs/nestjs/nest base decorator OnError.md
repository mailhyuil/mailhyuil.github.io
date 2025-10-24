# nest base decorator OnError

```ts
export function OnError(handler: (e: Error) => void) {
  return (target: object, key?: any, descriptor?: any) => {
    const originMethod = descriptor.value;

    const wrapper = (...args: any[]) => {
      try {
        return originMethod.call(this, ...args);
      } catch (error) {
        handler(error);
      }
    };

    Object.setPrototypeOf(wrapper, originMethod);
    descriptor.value = wrapper;
  };
}
```
