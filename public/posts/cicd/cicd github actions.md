# github actions

## 순서

```sh
1. 레포지토리 생성
2. local ssh key 깃허브에 등록 (ssh-keygen isa_rsa.pub 파일)
3. ec2 서버 ssh key 깃허브에 등록 (ssh-keygen isa_rsa.pub 파일)
4. ec2 git 설치 (sudo yum install git)
5. git init -> git remote add ssh_url
6. output files gitignore
7. 슬랙, 디스코드 연동
8. test 등등 추가
9. repository Actions 탭에서 nodejs 추가
10. 설정
```

## 변수 설정

repository -> settings -> secrets and variables -> Actions

## .github/workflows/deploy.yaml

```yaml
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
      - name: Install and Build
        run: |
          yarn install
          yarn build
      - name: Upload files
        run: |
          ssh -i ./scripts/samil-key.pem -o StrictHostKeyChecking=no ${{ env.SSH_USER }}@${{ env.SSH_HOST }} "rm -rf ${{ env.DEPLOY_PATH }}/.output"
          ssh -i ./scripts/samil-key.pem -o StrictHostKeyChecking=no ${{ env.SSH_USER }}@${{ env.SSH_HOST }} "mkdir ${{ env.DEPLOY_PATH }}/.output"
          scp -i ./scripts/samil-key.pem -r .output ${{ env.SSH_USER }}@${{ env.SSH_HOST }}:${{ env.DEPLOY_PATH }}
          scp -i ./scripts/samil-key.pem -r .env.production ${{ env.SSH_USER }}@${{ env.SSH_HOST }}:${{ env.DEPLOY_PATH }}
          scp -i ./scripts/samil-key.pem -r ecosystem.config.js ${{ env.SSH_USER }}@${{ env.SSH_HOST }}:${{ env.DEPLOY_PATH }}
      - name: Run Process Manager
        run: |
          ssh -i ./scripts/samil-key.pem -o StrictHostKeyChecking=no ${{ env.SSH_USER }}@${{ env.SSH_HOST }} "pm2 restart ${{ env.DEPLOY_PATH }}/ecosystem.config.js"
          ssh -i ./scripts/samil-key.pem -o StrictHostKeyChecking=no ${{ env.SSH_USER }}@${{ env.SSH_HOST }} "pm2 save"
```

## slack-notify workflow

```yaml
on: push
name: Slack Notification Demo
jobs:
  slackNotification:
    name: Slack Notification
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Slack Notification
        uses: rtCamp/action-slack-notify@v2
        env:
          SLACK_WEBHOOK: ${{ secrets.SLACK_WEBHOOK }}
```

## deploy workflow

> appleboy/ssh-action 사용

```yaml
name: deploy
  on:
    workflow_run:
      workflow: ["test_workflow", "lint_workflow"]
      types:
        - completed
  jobs:
    deploy:
      runs-on: ubuntu-latest
      steps:
      - name: remote-ssh
        uses: appleboy/ssh-action@v0.1.8
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          key: ${{ secrets.KEY }}
          port: ${{ secrets.PORT }}
          script: |
            cd my_server
            git pull
            pm2 restart ecosystem.config.js
```
