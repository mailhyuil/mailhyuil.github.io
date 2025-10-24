# nodejs module module resolution main vs module

> 둘 다 entrypoint를 지정하는 필드
>
> > main은 commonjs을 사용할 때 로드할 파일
> >
> > > module은 esm을 사용할 때 로드할 파일
> > >
> > > > exports 필드와 같은 역할을 한다.

```json
{
  "main": "lib/index.cjs",
  "module": "lib/index.mjs",
  "types": "lib/index.d.ts"
}
```
