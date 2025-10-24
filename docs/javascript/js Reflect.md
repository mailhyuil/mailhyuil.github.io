# js Reflect

> Object 내장 메소드를 대체하고 Proxy를 보조하기 위한 API
>
> "target의 property를 대신 호출한다."
>
> > reflect-metadata 라이브러리를 사용하면 Reflect API를 수정하여 메타 데이터를 저장할 수 있다.
> >
> > Metadata Proposal - ECMAScript를 반영한 것
> >
> > > Object 메소드 대신 사용하면 코드가 더 간결해진다.

```js
const target = { a: 1, b: 2 };

Reflect.deleteProperty(target, "a");
```

## 프록시 내에서 사용

```js
function reactive(target) {
  const proxy = new Proxy(target, {
    get(target, key, receiver) {
      const res = Reflect.get(target, key, receiver);
      // track(target, key);

      return res;
    },
    set(target, key, value, receiver) {
      const oldValue = target[key];
      const res = Reflect.set(target, key, value, receiver);

      if (oldValue !== res) {
        // trigger(target, key, value, oldValue);
      }
      return res;
    },
  });

  return proxy;
}

const child = {
  birthYear: 2019,
};

const parent = {
  birthYear: 1981,
  get age() {
    return new Date().getFullYear() - this.birthYear;
  },
};

const reactivityParent = reactive(parent);
child.__proto__ = reactivityParent;
```

## Object 대신 사용

```js
// 1. 에러 핸들링
const obj = {};
try {
  Object.defineProperty(obj, "prop", { value: 1 });
  console.log("success");
} catch (e) {
  console.log(e);
}

const obj2 = {};
if (Reflect.defineProperty(obj2, "prop", { value: 1 })) {
  console.log("success");
} else {
  console.log("problem creating prop");
}

// 2. 더 읽기 쉬운 코드
const obj = { prop: 1 };
console.log(Reflect.has(obj, "prop") === "prop" in obj); // true

const obj = { prop: 1, hasOwnProperty: 2 };
obj.hasOwnProperty("prop"); // Uncaught TypeError: obj.hasOwnProperty is not a function
Object.prototype.hasOwnProperty.call(obj, "prop"); // true
Reflect.has(obj, "prop"); // true
```
