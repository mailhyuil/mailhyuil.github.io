# cicd github actions docker cache

> GitHub Actions의 러너는 매번 새로운 가상 환경에서 실행된다. (모든 작업은 새롭게 다시 시작)
>
> 따라서 Docker의 cache를 사용할 수 없다.
>
> > docker/build-push-action를 사용하여 캐시할 수 있다.
> >
> > > type=gha는 github actions를 의미한다.

```yaml
- name: Set up Docker Buildx (Multi Platform Builder)
  uses: docker/setup-buildx-action@v3
- name: Build and Push
  uses: docker/build-push-action@v5
  with:
    context: .
    push: true
    file: ./docker/client.Dockerfile
    target: production
    tags: ${{ secrets.DOCKER_REGISTRY }}/client:${{ github.sha }} , ${{ secrets.DOCKER_REGISTRY }}/client:latest
    cache-from: type=gha # cache 사용
    cache-to: type=gha,mode=max # cache 사용
```
