# angular signal toObservable

> 내부적으로 effect를 사용
>
> > 알아서 destroy됨

```ts
constructor(){
    toObservable(this.signal$).subscribe(() => {
        console.log('signal$');
    });
}
```
