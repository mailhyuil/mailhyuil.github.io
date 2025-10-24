# typescript tsconfig references & extends

```json
{
  "references": [
    // 참조할 tsconfig 파일을 지정
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.spec.json"
    },
    {
      "path": "./tsconfig.editor.json"
    }
  ],
  "extends": "../../tsconfig.base.json" // 기본 설정을 가져옴
}
```
