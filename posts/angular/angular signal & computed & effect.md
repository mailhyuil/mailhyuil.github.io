# angluar signal

> 16v 부터 생긴 api
>
> > nuxt의 ref, computed 와 같다

## signal

### update

```
this.option.update((option) => ({ ...option, status: segment }));
```

## computed

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
