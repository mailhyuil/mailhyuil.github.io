# tsc ttypescript (transformer typescript)

> typescript는 아직 tsconfig.json에서 custom transformers를 지원하지 않습니다.
>
> > ttypescript를 사용하면 compile module을 패칭하여 이를 가능케합니다.
> >
> > > ttypescript는 유지보수가 중단되어 현재는 ts-patch를 사용하는게 좋다.

## install

```sh
# new!
npm i -g ts-patch # 글로벌로 설치
npm i -D ts-node # ts-patch는 ts-node를 사용하기 때문에 설치해야 함
npm i -D typescript # typescript 설치
ts-patch install # typescript의 tsc를 ts-patch로 패치 # npm i 를 할때마다 다시 해줘야함 prepare script에 추가하면 npm i 할때마다 자동으로 실행해줌
ts-patch check # 패치가 되었는지 확인
tspc # tsc를 패치 안할거라면 tsc 대신 tspc를 사용해도 된다.

# deprecated
npm i -D ttypescript
ttsc
```

## tsconfig.json

```json
{
  "compilerOptions": {
    "plugins": [{ "transform": "./my-transformer.ts" }]
  }
}
```

## config

```ts
export interface PluginConfig {
  /**
   * Path to transformer or transformer module name
   */
  transform?: string;

  /**
   * The optional name of the exported transform plugin in the transform module.
   */
  import?: string;

  /**
   * Plugin entry point format type, default is program
   */
  type?: "program" | "config" | "checker" | "raw" | "compilerOptions";

  /**
   * Should transformer applied after all ones
   */
  after?: boolean;

  /**
   * Should transformer applied for d.ts files, supports from TS2.9
   */
  afterDeclarations?: boolean;
  /**
   * any other properties provided to the transformer as config argument
   * */
  [options: string]: any;
}
```
