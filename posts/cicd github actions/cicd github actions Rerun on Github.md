# cicd github actions Rerun on Github

> workflow_dispatch: 가 포함되어 있으면 수동으로 rerun 가능하다.

```yaml
name: Deploy to Server Development
on:
  push:
    branches:
      - develop
    paths:
      - "apps/server/**"
      - ".github/workflows/server-development.y*ml"
  workflow_dispatch:
```
