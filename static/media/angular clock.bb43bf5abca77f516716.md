# angular clock

## ts

```ts
time = new Date();
rxTime = new Date();
intervalId;
subscription: Subscription;

ngOnInit() {
// Using Basic Interval
this.intervalId = setInterval(() => {
    this.time = new Date();
}, 1000);

// Using RxJS Timer
this.subscription = timer(0, 1000)
    .pipe(
    map(() => new Date()),
    share()
    )
    .subscribe(time => {
    this.rxTime = time;
    });
}

ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
        this.subscription.unsubscribe();
    }
}
```

## html

```html
Simple Clock:
<div>{{ time | date: 'hh:mm:ss a' }}</div>
RxJS Clock:
<div>{{ rxTime | date: 'hh:mm:ss a' }}</div>
```
