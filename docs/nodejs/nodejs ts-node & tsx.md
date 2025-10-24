# nodejs ts-node & tsx

> It JIT transforms TypeScript into JavaScript, enabling you to directly execute TypeScript on Node.js without precompiling.
>
> > 컴파일 하지 않고 바로 typescript 파일을 실행할 수 있게 해주는 라이브러리
> >
> > > tsx가 더 현대적이고 빠르다

## install

```sh
npm i -g ts-node
ts-node main.ts
ts-node --project tsconfig.json main.ts

npm i -g tsx
tsx main.ts
tsx --project tsconfig.json main.ts
```
