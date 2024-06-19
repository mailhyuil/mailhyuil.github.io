# profiling nx

## project.json

```json
"serve": {
  "builder": "@nrwl/builders:node-execute",
    "options": {
      "buildTarget": "api:build",
      "inspect": true
    }
},
```
