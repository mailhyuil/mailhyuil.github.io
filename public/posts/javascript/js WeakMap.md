# js WeakMap

> key로 객체를 받는다.
>
> > 객체에 대한 부차적인 데이터를 저장하고 싶을 때
> >
> > > 객체의 참조가 사라지면 WeakMap의 참조도 해제된다.

```txt
WeakMaps provide a way to extend objects from the outside without interfering with garbage collection. Whenever you want to extend an object but can't because it is sealed - or from an external source - a WeakMap can be applied.

WeakMaps는 garbage collection의 간섭을 피하며 object를 외부적으로 확장할 수 있는 솔루션입니다.
특히 sealed object는 프로퍼티를 추가할 수 없는데 이 경우 WeakMaps의 진가가 발휘됩니다.
```

## usage 1

> weak reference를 사용하고 싶을 때

```js
// Map 사용 시
let john = { name: "John" };

let map = new Map();
map.set(john, "add some value.."); // 맵이 객체를 참조하게 됨

john = null; // 참조를 null로 덮어써도 가비지 컬렉터의 대상이 되지 않는다.

console.log(map.get(john)); // undefined 객체는 사라졌지만..
console.log(map.size); // 1 여전히 남아있음..

// WeakMap 사용 시
let john = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, "...");

john = null; // 참조를 덮어씀

// john을 나타내는 객체는 이제 메모리에서 지워집니다!
```

## usage 2

> WeakMap은 부차적인 데이터를 저장할 곳이 필요할 때 그 진가를 발휘합니다.

```js
// 📁 visitsCount.js
const visitsCountMap = new WeakMap(); // 위크맵에 사용자의 방문 횟수를 저장함

// 사용자가 방문하면 방문 횟수를 늘려줍니다.
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}
```

## usage 3

> 캐싱에 사용

```js
// 📁 cache.js
const cache = new WeakMap();

// 연산을 수행하고 그 결과를 위크맵에 저장합니다.
function process(obj) {
  if (!cache.has(obj)) {
    const result = /* 연산 수행 */ obj;

    cache.set(obj, result);
  }

  return cache.get(obj);
}

// 📁 main.js
const obj = {
  /* ... 객체 ... */
};

const result1 = process(obj);
const result2 = process(obj);

// 객체가 쓸모없어지면 아래와 같이 null로 덮어씁니다.
obj = null;

// 그냥 Map을 사용시 cache.size는 1을 리턴합니다.
// 하지만 WeakMap은 obj가 가비지 컬렉션의 대상이 되므로, 캐싱된 데이터 역시 메모리에서 삭제될 겁니다.
// 삭제가 진행되면 cache엔 그 어떤 요소도 남아있지 않을겁니다.
```
