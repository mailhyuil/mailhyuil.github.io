# tsc ttypescript (transformer typescript)

> typescript는 아직 tsconfig.json에서 custom transformers를 지원하지 않습니다.
>
> > ttypescript를 사용하면 compile module을 패칭하여 이를 가능케합니다.

## install

```sh
npm i -D ttypescript
ttsc
```

## tsconfig.json

```json
{
  "compilerOptions": {
    "customTransformers": {
      "before": ["transformermodule"],
      "after": ["./or_some_path_in_your_project_directory"]
    }
  }
}
```
