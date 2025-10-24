# ionic tailwindcss

## project.json

> tailwindcss와 함께 사용한다면 typography 초기화를 위해서 node_modules/@ionic/angular/css/typography.css를 삭제

```json
"styles": [
    "client/src/styles.scss",
    {
    "input": "./client/src/theme/variables.scss"
    },
    {
    "input": "node_modules/@ionic/angular/css/core.css"
    },
    {
    "input": "node_modules/@ionic/angular/css/normalize.css"
    },
    {
    "input": "node_modules/@ionic/angular/css/structure.css"
    },
    {
    "input": "node_modules/@ionic/angular/css/display.css"
    },
    {
    "input": "node_modules/@ionic/angular/css/padding.css"
    },
    {
    "input": "node_modules/@ionic/angular/css/float-elements.css"
    },
    {
    "input": "node_modules/@ionic/angular/css/text-alignment.css"
    },
    {
    "input": "node_modules/@ionic/angular/css/text-transformation.css"
    },
    {
    "input": "node_modules/@ionic/angular/css/flex-utils.css"
    }
],
```
