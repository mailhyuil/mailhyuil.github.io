# cicd github actions docker

> secrets 설정
>
> > DOCKER_USERNAME, DOCKER_PASSWORD, DOCKER_REGISTRY
> >
> > SSH_HOST, SSH_USERNAME, SSH_KEY, SSH_PORT

```yaml
name: Deploy Server Production
on:
  push:
    branches:
      - develop
    paths:
      - "apps/server/**"
      - "libs/**"
  workflow_dispatch:
jobs:
  deploy_prod:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [18.x]
    steps:
      - name: Ubuntu로 checkout
        uses: actions/checkout@v3
      - name: Node.js ${{ matrix.node-version }}를 사용
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
          cache: "npm"
      - name: Install Dependencies
        run: npm install --force
      - name: Build Project
        run: npx nx build server
      - name: Build & Push Docker Image
        run: |
          docker login -u ${{ secrets.DOCKER_USERNAME }} -p ${{ secrets.DOCKER_PASSWORD }} ${{ secrets.DOCKER_REGISTRY }}
          docker build -f apps/Dockerfile.server -t ${{ secrets.DOCKER_REGISTRY }}/server:${{ github.sha }} .
          docker push ${{ secrets.DOCKER_REGISTRY }}/server:${{ github.sha }}
      - name: Access to Remote Server & Run Docker Container
        uses: appleboy/ssh-action@v0.1.8
        with:
          host: ${{ secrets.SSH_HOST }}
          username: ${{ secrets.SSH_USERNAME }}
          key: ${{ secrets.SSH_KEY }}
          port: 22
          script: |
            sudo whoami
            sudo docker stop server
            sudo docker rm server
            sudo docker run --name server -p 3000:3000 -d ${{ secrets.DOCKER_REGISTRY }}/server:${{ github.sha }}
            sudo docker image prune -af
```
