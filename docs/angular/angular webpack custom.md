# angular webpack custom

> angular cli는 기본으로 webpack을 사용한다.
>
> > webpack.config.js를 사용하려면 @angular-builders/custom-webpack을 설치해야 한다.

## install

```sh
npm i -D @angular-builders/custom-webpack
```

## angular.json

```json
"architect": {
    "build": {
        "builder": "@angular-builders/custom-webpack:browser",
        "options": {
            "customWebpackConfig": {
                "path": "./webpack.config.js"
            },
        }
    }
}
```
