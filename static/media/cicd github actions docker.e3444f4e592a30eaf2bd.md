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
      - main
    paths:
      - "apps/server/**"
  workflow_dispatch:
jobs:
  deploy_prod:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Login to Image Registry
          uses: docker/login-action@v3
          with:
            username: ${{ secrets.DOCKER_USERNAME }}
            password: ${{ secrets.DOCKER_PASSWORD }}
            registry: ${{ secrets.DOCKER_REGISTRY }}

      - name: Set up Docker Buildx (Multi Platform Builder)
          uses: docker/setup-buildx-action@v3

      - name: Build and Test
          uses: docker/build-push-action@v5
          with:
            context: .
            target: test # target은 stage의 이름 AS [target]을 의미
            load: true

      - name: Build and Push
          uses: docker/build-push-action@v5
          with:
            context: .
            push: true
            target: prod
            tags: ${{ secrets.DOCKER_USERNAME }}/server:${{ github.sha }}
            # tags: ${{ secrets.DOCKER_USERNAME }}/${{ github.event.repository.name }}:latest

      - name: Access to Remote Server & Run Container [CD]
        uses: appleboy/ssh-action@v0.1.8
        with:
          host: ${{ secrets.SSH_HOST }}
          username: ${{ secrets.SSH_USERNAME }}
          key: ${{ secrets.SSH_KEY }}
          port: 22
          script: |
            sudo whoami
            sudo export SERVER_VERSION=${{ github.sha }}
            sudo cd /home/ubuntu
            sudo docker compose up -d
            sudo docker image prune -af
```
