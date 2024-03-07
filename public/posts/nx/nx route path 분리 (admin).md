# nx route path 분리 (/admin)

## admin/package.json

```json
"build": {
  "executor": "@nx/angular:webpack-browser",
  "outputs": ["{options.outputPath}"],
  "options": {
    "baseHref": "/admin/",
    }
  },
```
