# angular zone.js

> zonejs는 값을 변경하는 이벤트가 발생했을 때 angular가 변경을 감지하고 화면을 다시 그리는데 사용된다.

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
constructor(private zone: NgZone) {
    zone.runOutsideAngular(() => {
        window.addEventListener('scroll', () => {
            this.zone.run(() => {
                // 이벤트 처리
            });
        });
    });

    zone.run(() => {
        // 이벤트 처리
    });

    zone.runGuarded(() => {
        // 이벤트 처리
    });
}
```
