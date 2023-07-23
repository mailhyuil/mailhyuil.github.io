# angular zone.js

> zonejs는 값을 변경하는 이벤트가 발생했을 때 angular가 변경을 감지하고 화면을 다시 그리는데 사용된다.

## What is Zones?

> Zones : 비동기 작업을 위한 실행 컨텍스트 / an execution context for asynchronous operations.
>
> > 비동기 작업(예: setTimeout, Ajax 등)는 동기적으로 profiling 할 수 없다.
> >
> > > Zones는 비동기 메소드를 override(monkey patching)해서 비동기 작업의 error handling, profiling 등을 할 수 있다.

## zonejs monkey patch

> 밑의 window 메소드들은 zonejs에 의해 monkey patch 되어있다.

```
Zone.setTimeout()
Zone.setInterval()
Zone.requestAnimationFrame()
Zone.addEventListener()
Zone.removeEventListener()

// test 용도로 monkey patching 됨
Zone.alert()
Zone.prompt()
```

## Zone.js 밖에서 이벤트를 수신하고 싶을 때

```ts
// this.cdr.detach() 사용
constructor(private cdr: ChangeDetectorRef) {
    this.cdr.detach();
    window.addEventListener('scroll', () => {

    });
}

// ngZone runOutsideAngular 사용
constructor(private zone: NgZone) {
    zone.runOutsideAngular(() => {
        window.addEventListener('scroll', () => {

        });
    });
}
```
