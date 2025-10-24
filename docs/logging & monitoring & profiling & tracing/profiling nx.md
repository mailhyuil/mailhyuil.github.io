# profiling nx

> build가 아니라 serve option임

## project.json

```json
{
  "serve": {
    "builder": "@nrwl/builders:node-execute",
    "options": {
      "buildTarget": "api:build",
      "inspect": true
    }
  }
}
```
