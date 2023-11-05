# cicd github actions docker

> secrets 설정
>
> > DOCKER_USERNAME, DOCKER_PASSWORD, DOCKER_REGISTRY, DOCKER_FILE
> > SSH_HOST, SSH_USERNAME, SSH_KEY, SSH_PORT

```yaml
name: deploy
  on: push
  jobs:
    deploy:
      runs-on: ubuntu-latest
      steps:
      - name: Build App
        run: |
          nx build my_app
      - name: Build & Push Docker Image
        run: |
          docker login -u ${{ secrets.DOCKER_USERNAME }} -p ${{ secrets.DOCKER_PASSWORD }} ${{ secrets.DOCKER_REGISTRY }}
          docker build -f ${{ secrets.DOCKER_FILE }} -t ${{ secrets.DOCKER_REGISTRY }}:${{ github.sha }} .
          docker push ${{ secrets.DOCKER_REGISTRY }}:${{ github.sha }}
      - name: Access to Remote Server & Run Docker Container
        uses: appleboy/ssh-action@v0.1.8
        with:
          host: ${{ secrets.SSH_HOST }}
          username: ${{ secrets.SSH_USERNAME }}
          key: ${{ secrets.SSH_KEY }}
          port: ${{ secrets.SSH_PORT }}
          script: |
            cd my_app
            docker stop my_app
            docker rm my_app
            docker run -d --name my_app -p 80:80 ${{ secrets.DOCKER_REGISTRY }}:${{ github.sha }}
```
