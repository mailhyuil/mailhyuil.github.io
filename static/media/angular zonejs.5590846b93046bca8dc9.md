# angular zone.js

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
