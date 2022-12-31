# express on NestJs

> NestJs는 두개의 프레임워크로 작동된다 express fastify
>
> > @Res() @Req()를 사용하여 express 객체에 접근할 수 있다.
> >
> > > 하지만 fastify프레임워크로 전환할 때 문제가 될 수 있기 때문에 권장하지 않는다.

```ts
@Get()
getAll(@Req() req, @Res() res):Movie[]{
    ...
}
```
