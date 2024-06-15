# tsc ttypescript (transformer typescript)

> typescript는 아직 tsconfig.json에서 custom transformers를 지원하지 않습니다.
>
> > ttypescript를 사용하면 compile module을 패칭하여 이를 가능케합니다.
> >
> > > 현재는 ts-patch로 변경되었습니다.

## install

```sh
# new!
npm i -D ts-patch
tspc

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
