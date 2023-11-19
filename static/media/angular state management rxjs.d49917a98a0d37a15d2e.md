# angular state management rxjs

> rxjs를 사용하여 state management를 구현할 수 있다
>
> > BehaviorSubject를 사용하여 구현한다

## count-state.service.ts

```ts
count$ = new BehaviorSubject<number>(0);
```

## 자식 컴포넌트

```ts
count?: number;

constructor(private countStateService: CountStateService) {
  this.countStateService.count$.subscribe((count) => {
    this.count = count;
  });
}
```
