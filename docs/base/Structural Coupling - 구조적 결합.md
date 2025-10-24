# Structural Coupling - 구조적 결합

> 하나의 코드를 수정하면 다른 코드에 영향을 미치는 현상
>
> > 구조적 결합은 코드의 유지보수를 어렵게 만들며, 코드의 예측 가능성을 떨어뜨린다.
> >
> > 구조적 결합이 많으면 하나의 코드를 수정할 때마다 다른 코드를 수정해야 하는 경우가 발생할 수 있다.
> >
> > > e.g. 데이터베이스 스키마를 변경 시 코드 수정이 필요한 경우

## example

### as-is

```ts
await this.prisma.attachment.deleteMany({
  where: {
    noticeId: null,
    profileId: null,
    // ..other relations // relations가 추가될 때마다 수정이 필요
  },
});
```

### to-be

```ts
await this.prisma.attachment.deleteMany({
  where: {
    deleted: true, // deleted 필드를 사용하여 삭제 여부를 판단 // relations가 추가되어도 수정이 필요 없음
  },
});
```
