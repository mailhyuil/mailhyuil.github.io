# rxjs lastValueFrom & firstValueFrom

> complete까지 기다렸다가 마지막 값 또는 첫번째 값을 Promise로 리턴
>
> > 두번째 인자로 defaultValue를 넣을 수 있다.
> >
> > > 내부적으로 결국 subscribe를 사용한다.

```ts
lastValueFrom(observableThing, { defaultValue: "defaultValue" });
```
