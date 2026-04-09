# nuxt mitt

- emit을 전역으로 관리
- angular의 subject와 비슷한 역할

## install

```sh
npm install --save mitt
```

## /plugins/mitt.ts

```ts
import mitt from "mitt";

type Events = {
  foo: string;
  bar?: number;
};

const emitter = mitt<Events>();

// listen to an event
emitter.on("foo", e => console.log("foo", e));

// listen to all events
emitter.on("*", (type, e) => console.log(type, e));

// fire an event
emitter.emit("foo", { a: "b" });

// clearing all events
emitter.all.clear();

// working with handler references:
function onFoo() {}
emitter.on("foo", onFoo); // listen
emitter.off("foo", onFoo); // unlisten
```
