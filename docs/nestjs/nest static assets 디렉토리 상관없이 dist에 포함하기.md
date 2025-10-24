# nest static assets 디렉토리 상관없이 dist에 포함하기

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
