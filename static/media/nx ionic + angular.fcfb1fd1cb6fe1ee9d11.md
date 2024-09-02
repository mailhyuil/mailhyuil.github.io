# nx ionic + angular

## project.json

> tailwindcss 의 @base가 먹히지 않으면 core를 빼고 전부 삭제

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
    "input": "node_modules/@ionic/angular/css/typography.css"
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
