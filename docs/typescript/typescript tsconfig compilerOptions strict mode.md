# typescript tsconfig compilerOptions strict mode

> strict모드를 false로 하면 에러메시지만 나오고 작동을 잘 된다
>
> > strict모드를 true로 하면 에러가 있을 경우 작동이 안된다.
> >
> > > 실무에서는 false로 한다. 라이브러리가 작동이 안되기 때문.
> > >
> > > > 파일만 strict모드를 지정할 수 있는 플러그인이 있다.

```json
{
  "compilerOptions": {
    "strict": true,
    /* "strict": true 로 설정 시 밑에 옵션들이 true로 설정된다.
     *
    "alwaysStrict": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "useUnknownInCatchVariables": true,
    "noImplicitAny": true,
    "noImplicitThis": true,
     *
     */

    // 추가하면 좋은 옵션
    "noUncheckedIndexedAccess": true,
    "noFallthroughCasesInSwitch": true,
    "noImplicitOverride": true,
    "noImplicitReturns": true
  }
}
```
