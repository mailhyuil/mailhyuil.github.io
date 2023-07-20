# angluar signal

> V16 부터 생긴 api
>
> > nuxt의 ref, computed 와 같다

## signal

```js
// set
this.signal.set("newValue");

// update
this.option.update((option) => ({ ...option, status: segment }));

// mutate
this.todos.mutate((value) => {
  // Change the first TODO in the array to 'done: true' without replacing it.
  value[0].done = true;
});
```

## computed

```js
const count: WritableSignal<number> = signal(0);
const doubleCount: Signal<number> = computed(() => count() * 2);
```

## effect

> constructor 안에서 사용

```ts
  option = signal({
    pageNo: 1,
    pageSize: 10,
    query: '',
    align: 'desc',
    role: 'ALL',
    status: 'ALL',
    orderBy: 'createdAt',
  });

  constructor(
    private readonly modalController: ModalController,
    private readonly httpService: HttpService
  ) {
    effect(async () => {
      this.result = await lastValueFrom(
        this.httpService.get<IPaginationDTO<IAdminDTO>>('admin/search', {
          params: {
            ...this.option(),
          },
        })
      );
    });
  }
```
