# angular preload

## angular.json

```json
// angular.json
  "styles": [
    {
      "input": "src/pre_styles.scss",
      "inject": false
    },
    {
      "input": "src/late_styles.scss", // <- we will use it later.
      "inject": false
    }
  ]
```

## index.html

```html
<!-- index.html -->
<head>
  ...
  <link rel="preload" href="pre_styles.css" as="style" />
  <link rel="stylesheet" href="pre_styles.css" />
</head>
```
