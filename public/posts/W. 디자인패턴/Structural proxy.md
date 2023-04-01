# proxy

> 객체의 행동을 대신 수행해 줌
>
> > 행동에 다른 로직을 추가해서 행동시킬 수 있음

```ts
const person = {
  name: 'John Doe',
  age: 42,
  nationality: 'American',
};

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(obj[prop]);
  },
  set: (obj, prop, value) => {
    obj[prop] = value;
    return true;
  },
});

personProxy.age;
personProxy.age = 300;
personProxy.age;
```

```ts
const original = { name: 'jeff' };

const reactive = new Proxy(original, {
  get(target, key) {
    console.log('Tracking: ', key);
    return target[key];
  },
  set(target, key, value) {
    console.log('updating UI...');
    return Reflect.set(target, key, value);
  },
});

reactive.name; // 'Tracking: name'

reactive.name = 'bob'; // 'updating UI...'
```
