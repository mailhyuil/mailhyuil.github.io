# typescript tsconfig compilerOptions module

> 컴파일을 마친 자바스크립트 모듈이 어떤 모듈 시스템을 사용할 지를 설정하는 옵션
>
> > commonjs 시 import 문과 require 문을 둘 다 사용할 수 있다.
> >
> > > BigInt 같은 새로운 기능을 사용하려면 esnext로 설정

```json
{
  "compilerOptions": {
    "module": "commonjs"
  }
}
```
