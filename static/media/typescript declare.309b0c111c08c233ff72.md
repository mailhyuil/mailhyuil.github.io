# typescript declare

> 변수, 상수, 함수, 또는 클래스가 어딘가에 이미 선언되어 있음을 알린다.
>
> > (i.e. JS 코드로는 컴파일 되지 않고, TypeScript 컴파일러에게 타입 정보를 알리기만 한다.)
> >
> > > 타입의 경우 어차피 JS 코드로 컴파일 되지 않으므로 declare 키워드를 사용하지 않아도 된다.

## 즉 어딘가에 선언되어 있지만, TS 컴파일러가 알지 못하는 경우(import 하지 못하는 경우)에 사용한다.

```ts
declare module "myPackage" {
  function init(config: Config): boolean;
}
```

```ts
declare module "v-click-outside";
```
