# cicd github actions docker

> secrets 설정
>
> > DOCKER_USERNAME, DOCKER_PASSWORD, DOCKER_REGISTRY
> >
> > SSH_HOST, SSH_USERNAME, SSH_KEY, SSH_PORT

```yaml
name: Deploy Client Production
on:
  push:
    branches:
      - main
    paths:
      - "apps/client/**"
      - ".github/workflows/client-production.yml"
      - "docker/client.Dockerfile"
  workflow_dispatch:
jobs:
  deploy_client_prod:
    runs-on: self-hosted
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

      - name: Build and Push
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          cache-from: type=gha # cache 사용
          cache-to: type=gha,mode=max # cache 사용
          file: ./docker/client.Dockerfile
          target: production # target은 stage의 이름 "AS [target]"
          tags: ${{ secrets.DOCKER_REGISTRY }}/client:${{ github.sha }} , ${{ secrets.DOCKER_REGISTRY }}/client:latest

      # self-host 사용
      - name: Access to Remote Server & Run Container [CD]
        run: |
          echo "${{ secrets.SSH_KEY }}" >> $HOME/ssh_key.pem
          chmod 600 $HOME/ssh_key.pem
          ssh -o StrictHostKeyChecking=no -i $HOME/ssh_key.pem ${{ secrets.SSH_USERNAME }}@${{ secrets.SSH_HOST }} << ENDSSH
            sudo -i
            cd /home/ubuntu
            docker compose pull client
            docker compose down client
            docker compose down nginx
            docker volume remove ubuntu_client-data
            docker compose up -d
            docker image prune -af
          ENDSSH
          rm $HOME/ssh_key.pem

      # appleboy/ssh-action 사용
      - name: Access to Remote Server & Run Container [CD]
        uses: appleboy/ssh-action@v0.1.8
        with:
          host: ${{ secrets.SSH_HOST }}
          username: ${{ secrets.SSH_USERNAME }}
          key: ${{ secrets.SSH_KEY }}
          port: 22
          script: |
            sudo -i
            cd /home/ubuntu
            docker compose pull client
            docker compose down client
            docker compose down nginx
            docker volume remove ubuntu_client-data
            docker compose up -d
            docker image prune -af
```
