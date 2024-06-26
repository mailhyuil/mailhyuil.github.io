# typescript tsconfig compilerOptions module

> 어떤 모듈 시스템으로 js를 컴파일할지 지정한다.
>
> tsconfig의 module과 package.json의 type이 일치해야 실행시킬 수 있다.
>
> > 파일 이름을 mjs cjs로 하면 package.json과 상관없이 실행가능
> >
> > > module을 commonjs로 지정하면 require를 사용할 수 있다.
> > >
> > > module을 commonjs로 지정하고 esModuleInterop을 true로 지정하면 require와 import를 같이 사용할 수 있다.
> > >
> > > BigInt, json assertion같은 기능을 사용하려면 module을 esnext로

```json
{
  "compilerOptions": {
    "module": "commonjs"
  }
}
```
