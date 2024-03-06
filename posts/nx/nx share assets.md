# nx share assets

## project.json

```json
"assets": [
  "apps/admin/src/favicon.ico",
  "apps/admin/src/assets",
  {
    "glob": "**/*",
    "input": "apps/common/src/assets",
    "output": "/assets"
  }
],
```
