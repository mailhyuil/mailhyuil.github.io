# angular signal http

```ts
option = signal<IPaginationOptionDTO>({
  pageNo: 1,
  pageSize: 10,
  orderBy: 'createdAt',
  align: 'desc',
  query: '',
});

result$ = toObservable(this.option).pipe(
  takeUntilDestroyed(),
  debounceTime(100),
  switchMap((option) => {
    return this.httpService.get<IPaginationDTO<IUserDTO>>(`user/search`, {
      params: { ...option },
    });
  })
);

result = toSignal<IPaginationDTO<IUserDTO>>(this.result$);

changeOption(values: Partial<IPaginationOptionDTO>) {
  this.option.update((option) => ({ ...option, ...values }));
}
```
