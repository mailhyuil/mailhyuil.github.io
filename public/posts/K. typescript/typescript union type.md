# typescript union type

> | & 사용
>
> > & 은 extends와 같다

## union

```
IPaginationOptionDTO & { status: PostType | "ALL" }
```

## extends

```
export interface IPostPaginationDTO extends IPaginationOptionDTO {
  status: PostType | "ALL";
}
```
