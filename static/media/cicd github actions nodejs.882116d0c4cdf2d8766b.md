# cicd github actions nodejs

```yaml
name: Node.js CI

on:
  push:
    branches: ["main"]
#   paths: ["packages/admin/**"] # 특정 경로의 파일이 변경됐을때만 trigger
env:
  SSH_USER: ROOT
  SSH_HOST: localhost
  DEPLOY_PATH: /app

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.x]

    steps:
      - uses: actions/checkout@v3
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
          cache: "npm"
      - name: BUILD & INSTALL
        run: |
          npm install
          npm run build
          echo @@@@@@@@@@ 성공!! @@@@@@@@@@@
```
