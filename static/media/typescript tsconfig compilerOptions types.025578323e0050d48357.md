# typescript tsconfig.json types

> 기본으로 모든 node_modules/@types/\*는 전부 컴파일 시 포함된다.
>
> > 만약 특정 타입만 사용하고 싶다면 tsconfig.json에 types를 설정해주면 된다.

```json
{
  "compilerOptions": {
    "types": ["node", "jest", "express"]
  }
}
```
