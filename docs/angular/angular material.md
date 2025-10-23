# angular material

## install

```sh
# 설치
npm i @angular/material

# 자동 세팅 (수동으로 해도 된다.)
ng add @angular/material
```

## 수동 세팅

### prebuilt theme 추가

```json
"styles": [
  "node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
  "src/styles.scss"
],
```

### index.html에 typography 추가

```html
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
```

### app.config.ts에 BrowserAnimationsModule 추가

```ts
importProvidersFrom([
  BrowserAnimationsModule,
]),
```
