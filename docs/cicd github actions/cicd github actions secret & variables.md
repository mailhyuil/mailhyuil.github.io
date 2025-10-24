# cicd github actions secret & variables

> github repository -> settings -> secrets 에서 설정

## workflow.yaml 에서 읽기

```yaml
${{ secrets.HOST }}
${{ vars.SERVER_PORT }}
```

## .env 에 추가하기

> env에서 NAME:KEY 로 추가하면
>
> run에서 $NAME 로 읽을 수 있음
>
> > echo "NAME=$NAME" >> .env

```yaml
steps:
  - name: access to secrets
    env:
      MAP_API_KEY: ${{secrets.MAP_API_KEY}}
    run: |
      echo "MAP_API_KEY=$MAP_API_KEY" >> .env
```
