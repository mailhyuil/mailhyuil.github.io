# prisma create vs createMany

> 둘다 여러개를 동시에 생성할 수 있다
>
> > you cannot use the createMany function with nested relations directly. Instead, you should use the create function in a loop to achieve this.

## create

> nested relation 생성 가능
>
> 1-n relations 지원
>
> m-n relations 지원
>
> > skipDuplicates 불가능

## createMany

> 1-n relations 지원
>
> skipDuplicates 가능
>
> > nested relation 생성 불가능
> >
> > m-n relations 미지원
