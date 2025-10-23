# nuxt 모듈을 못찾을 때

> @types declare 파일이 없어서 못찾는 거

## @types 파일이 npm에 없을 시

1. types/package.d.ts 파일 생성

```ts
declare module "v-click-outside";
```

2. tsconfig.json 파일에 경로 추가

> nuxt의 경우 nuxt.config.ts의 typescript 옵션에 추가

```
compilerOptions: {
				types: ["types/v-click-outside.d.ts"],
			},
```
