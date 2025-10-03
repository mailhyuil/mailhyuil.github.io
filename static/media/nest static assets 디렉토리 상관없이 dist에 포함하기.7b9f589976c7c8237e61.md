# nest dist에 파일 포함시키기

> \*\*/\*.(ejs|html|css|js|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|otf|txt|map|json)
>
> > 어느 폴더에 있든 상관없이 모든 파일을 포함시키겠다는 의미

## nest-cli.json

```json
"compilerOptions": {
  "assets": ["**/*.ejs"],
  "watchAssets": true
}
```
