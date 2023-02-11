# index.d.ts

> 타입 정의 파일
>
> > 코드의 타입 추론을 돕는 파일

## tsconfig.json

> declaration 을 true로 하면 컴파일 시 .d.ts 을 생성한다

```
{
  "declaration": true, /* Generates corresponding '.d.ts' file. */
  "outDir": "./dist",  /* Redirect output structure to the directory. */
}
```

## package.json

> Type definition 파일을 지정한다.

```
"types": "dist/index.d.ts"
```
