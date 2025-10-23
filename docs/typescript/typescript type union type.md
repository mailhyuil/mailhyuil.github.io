# typescript union type

> | & 사용
>
> > & 은 extends와 같다

## union

```ts
IPaginationOptionDTO & { status: PostType | "ALL" };
```

## extends

```ts
export interface IPostPaginationDTO extends IPaginationOptionDTO {
  status: PostType | "ALL";
}
```
