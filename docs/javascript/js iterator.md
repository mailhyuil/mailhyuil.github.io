# js iterator

> Symbol.iterator를 구현한 객체를 이터러블 객체라고 한다.

```js
let range = {
  from: 1,
  to: 5,

  // for..of 최초 실행 시, Symbol.iterator가 호출됩니다.
  [Symbol.iterator]() {
    // Symbol.iterator메서드는 이터레이터 객체를 반환합니다.
    // 이후 for..of는 반환된 이터레이터 객체만을 대상으로 동작하는데,
    // 다음 값은 next()에서 정해집니다.
    return {
      current: this.from,
      last: this.to,

      // for..of 반복문에 의해 각 이터레이션마다 next()가 호출됩니다.
      next() {
        // (2)
        //  next()는 객체 형태의 값, {done:.., value :...}를 반환합니다.
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (let value of range) {
  alert(value); // 1, 2, 3, 4, 5
}
```
