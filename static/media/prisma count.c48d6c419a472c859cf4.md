# prisma count

## dto

> CountDTO는 맨위에 있어야 한다.
>
> > 컴파일 시 init이 안되있음

```ts
@Exclude()
export class SomeCountDTO {
  @Expose()
  @ApiProperty()
  field1: number;
  @Expose()
  @ApiProperty()
  field2: number;
  @Expose()
  @ApiProperty()
  field3: number;
}

@Exclude()
export class SomeDTO {
  @Expose()
  @ApiProperty({
    type: () => SomeCountDTO,
  })
  @Type(() => SomeCountDTO)
  _count: SomeCountDTO;
}
```

## prisma

```ts
this.prisma.some.findUnique({
  where: { id },
  include: {
    _count: {
      select: {
        field1: true,
        field2: true,
        field3: true,
      },
    },
  },
});
```
