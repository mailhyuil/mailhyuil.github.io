# angular zone.js

> zonejs는 값을 변경하는 이벤트가 발생했을 때 angular가 변경을 감지하고 화면을 다시 그리는데 사용된다.

## What is Zones?

> Zones : 비동기 작업을 위한 실행 컨텍스트 / an execution context for asynchronous operations.
>
> > 비동기 작업(예: setTimeout, Ajax 등)는 동기적으로 profiling 할 수 없다.
> >
> > > Zones는 비동기 메소드를 override(monkey patching)해서 비동기 작업의 error handling, profiling 등을 할 수 있다.

## zone.js 필드

```ts
class Zone {
  constructor(parent: Zone, zoneSpec: ZoneSpec);
  static get current(); // 현재 zone
  get name(); // zone은 name property를 갖는다 이 name은 디버깅을 위해 사용
  get parent(); // zone의 parent zone

  fork(zoneSpec: ZoneSpec); // 새로운 zone을 생성 // fork({name:'myZone})
  fork();
  run(callback, this, arguments, source); // 주어진 zone안에서 동기적으로 함수를 호출한다.
  runGuarded(callback, this, arguments, source); // run과 동일하지만 런타임 에러를 캐치하고, 에러 인터셉트 메커니즘을 제공한다.
  wrap(callback, source);
}
```

## zonejs monkey patch

> 밑의 window 메소드들은 zonejs에 의해 monkey patch 되어있다.

```js
Zone.setTimeout();
Zone.setInterval();
Zone.requestAnimationFrame();
Zone.addEventListener();
Zone.removeEventListener();

// test 용도로 monkey patching 됨
Zone.alert();
Zone.prompt();
```

## Zone.js 밖에서 이벤트를 수신하고 싶을 때

```ts
// ngZone runOutsideAngular 사용
constructor(private zone: NgZone) {
    zone.runOutsideAngular(() => {
        window.addEventListener('scroll', () => {
        });
    });
}

// this.cdr.detach() 도 사용 가능
constructor(private cdr: ChangeDetectorRef) {
    this.cdr.detach();
    window.addEventListener('scroll', () => {
    });
}
```
