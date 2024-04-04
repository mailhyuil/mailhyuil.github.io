# angular signal toObservable

> 내부적으로 effect를 사용
>
> > takeUntilDestroyed 달아주기

```ts
constructor(){
    toObservable(this.signal$).pipe(
        takeUntilDestroyed(this)
    ).subscribe(() => {
        console.log('signal$');
    });
}
```
