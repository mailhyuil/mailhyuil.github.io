# github actions

## .github/workflows/deploy.yaml

```
name: Deploy Client

on:
  push:
    branches:
      - main

permissions:
  contents: read

env:
  SSH_USER: ubuntu
  SSH_HOST: 103.218.158.175
  DEPLOY_PATH: /home/ubuntu/samil-client

jobs:
  deploy:
    name: Deploy Client
    runs-on: self-hosted
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
          ref: main
      - name: build
        run: |
          yarn install
          yarn build
      - name: upload
        run: |
          ssh -i ./scripts/samil-key.pem -o StrictHostKeyChecking=no ${{ env.SSH_USER }}@${{ env.SSH_HOST }} "rm -rf ${{ env.DEPLOY_PATH }}/.output"
          ssh -i ./scripts/samil-key.pem -o StrictHostKeyChecking=no ${{ env.SSH_USER }}@${{ env.SSH_HOST }} "mkdir ${{ env.DEPLOY_PATH }}/.output"
          scp -i ./scripts/samil-key.pem -r .output ${{ env.SSH_USER }}@${{ env.SSH_HOST }}:${{ env.DEPLOY_PATH }}
          scp -i ./scripts/samil-key.pem -r .env.production ${{ env.SSH_USER }}@${{ env.SSH_HOST }}:${{ env.DEPLOY_PATH }}
          scp -i ./scripts/samil-key.pem -r ecosystem.config.js ${{ env.SSH_USER }}@${{ env.SSH_HOST }}:${{ env.DEPLOY_PATH }}
      - name: run
        run: |
          ssh -i ./scripts/samil-key.pem -o StrictHostKeyChecking=no ${{ env.SSH_USER }}@${{ env.SSH_HOST }} "pm2 restart ${{ env.DEPLOY_PATH }}/ecosystem.config.js"
          ssh -i ./scripts/samil-key.pem -o StrictHostKeyChecking=no ${{ env.SSH_USER }}@${{ env.SSH_HOST }} "pm2 save"

```
