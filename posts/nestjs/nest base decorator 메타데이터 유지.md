# nest base decorator 메타데이터 유지

```ts
export function OnErrorPreserveMeta(handler: (e: Error) => void) {
  return (target: object, key?: any, descriptor?: any) => {
    const originMethod = descriptor.value;

    const wrapper = (...args: any[]) => {
      try {
        return originMethod.call(this, ...args);
      } catch (error) {
        handler(error);
      }
    };

    Object.setPrototypeOf(wrapper, originMethod); // originMethod의 prototype을 wrapper에 설정
    descriptor.value = wrapper;
  };
}
```
