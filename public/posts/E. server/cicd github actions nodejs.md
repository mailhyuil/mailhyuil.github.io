# cicd github actions nodejs

```yaml
name: Node.js CI

on:
  push:
    branches: ["main"]

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
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

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
