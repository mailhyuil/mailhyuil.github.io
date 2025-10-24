# typescript에서 js 패키지 사용

> javascript로 작성된 파일은 타입지정이 안되어있기에 에러가 발생한다
>
> > @types/패키지를 설치하고 ts파일로 작성하면 타입을 읽을 수 있다.

## @types

> @types명령어로 \*.d.ts파일을 생성
>
> > \*.d.ts파일은 자바스크립트 라이브러리API의 타입을 알려준다

```sh
npm i @types/<package>
```

## \*.d.ts 파일이란?

> 타입 정의 파일
>
> > 코드의 타입 추론을 돕는 파일

## tsconfig.json

```json
"include": ["**/*.ts"],
```

## declare

> 변수, 상수, 함수, 또는 클래스가 어딘가에 이미 선언되어 있음을 알린다.

```ts
declare module "myPackage" {
  function init(config: Config): boolean;
}
```
