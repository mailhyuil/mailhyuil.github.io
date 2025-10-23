# index.d.ts

> 타입 정의 파일
>
> js 파일일 때만 필요
>
> > ts 파일은 그 자체로 타입에 대한 정보를 담고있다.
> >
> > > package.json 의 types에 위치를 명시
> > >
> > > > moduleResolution 시 주어진 경로의 \<package_name>.d.ts를 찾고
> > > >
> > > > 없으면 package.json의 types 필드를 확인하여 이동하여 찾는다
> > > >
> > > > 전부 없으면 node_modules/@types/\<package_name>.d.ts 를 찾음

## tsconfig.json

> declaration 을 true로 하면 컴파일 시 .d.ts 을 생성한다

```json
{
  "complierOptions": {
    "declaration": true /* Generates corresponding '.d.ts' file. */,
    "outDir": "./dist" /* Redirect output structure to the directory. */
  }
}
```

## package.json

> Type definition 파일을 지정한다.

```json
{ "types": "dist/index.d.ts" }
```
