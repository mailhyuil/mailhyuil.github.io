# cache WeakMap & WeakSet

> 어딘가에서 나도 모르게 참조 되고있는 객체는 가비지 컬렉팅 되지 않는다..!

## 문제

```js
let john = { name: "John" };

let map = new Map();
map.set(john, "add some value.."); // 맵이 객체를 참조하게 됨

john = null; // 참조를 null로 덮어써도 가비지 컬렉터의 대상이 되지 않는다.

console.log(map.get(john)); // undefined 객체는 사라졌지만..
console.log(map.size); // 1 여전히 남아있음..
```

## WeakMap

> Key값으로 객체만 사용 가능
>
> > 객체의 참조가 사라지면 WeakMap의 참조도 해제된다.

```js
let john = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, "...");

john = null; // 참조를 덮어씀

// john을 나타내는 객체는 이제 메모리에서 지워집니다!
```

## usage 예

> 위크맵은 부차적인 데이터를 저장할 곳이 필요할 때 그 진가를 발휘합니다.

```js
// 📁 visitsCount.js
const visitsCountMap = new WeakMap(); // 위크맵에 사용자의 방문 횟수를 저장함

// 사용자가 방문하면 방문 횟수를 늘려줍니다.
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}
```

## 캐싱에 사용

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

## WeakSet

> 객체만 저장 가능
>
> > '위크’맵과 유사하게 '위크’셋도 부차적인 데이터를 저장할 때 사용할 수 있습니다.
> >
> > > 다만, 위크셋엔 위크맵처럼 복잡한 데이터를 저장하지 않습니다.
> > >
> > > > 대신 "예"나 “아니오” 같은 간단한 답변을 얻는 용도로 사용됩니다.

```js
let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John이 사이트를 방문합니다.
visitedSet.add(pete); // 이어서 Pete가 사이트를 방문합니다.
visitedSet.add(john); // 이어서 John이 다시 사이트를 방문합니다.

// visitedSet엔 두 명의 사용자가 저장될 겁니다.

// John의 방문 여부를 확인해보겠습니다.
alert(visitedSet.has(john)); // true 예

// Mary의 방문 여부를 확인해보겠습니다.
alert(visitedSet.has(mary)); // false 아니요

john = null;

// visitedSet에서 john을 나타내는 객체가 자동으로 삭제됩니다.
```
