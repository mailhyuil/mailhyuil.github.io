# algorithm 지연로딩

> 프록시를 사용

```js
const targetObject = {
  property1: "value1",
  property2: "value2",
  // ...
};

const lazyLoadingHandler = {
  get(target, property) {
    // 필요한 속성이 접근될 때만 해당 속성을 로딩
    if (!target.hasOwnProperty(property)) {
      // 속성 로딩 로직 구현
      console.log(`Loading property: ${property}`);
      target[property] = "loaded value"; // 예시에서는 간단히 고정된 값으로 설정
    }
    return target[property];
  },
};

const lazyLoadedObject = new Proxy(targetObject, lazyLoadingHandler);

console.log(lazyLoadedObject.property1); // 필요한 시점에 속성 로딩
console.log(lazyLoadedObject.property2); // 이미 로딩된 속성은 다시 로딩하지 않음
```
