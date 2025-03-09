# angular preload

## angular.json

```json
"styles": [
  "apps/client/src/styles.scss",
  {
    "input": "apps/client/src/themes/font.scss",
    "inject": true,
    "bundleName": "font"
  }
]
```

## index.html

```html
<link rel="preload" href="font.css" />
```
