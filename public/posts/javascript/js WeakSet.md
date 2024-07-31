# js WeakSet

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
