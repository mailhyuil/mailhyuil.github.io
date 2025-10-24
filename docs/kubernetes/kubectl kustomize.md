# kustomize

> kubectl 에 내장된 기능
>
> > 선언적으로 kubernetes 리소스를 생성하는 도구

## usage

> kustomization.yaml 파일을 생성하고, 그 안에 리소스를 정의한다.
>
> > resources에 정의된 리소스들을 하나의 배포단위로 적용한다.

```yaml
resources:
  - deployment.yaml
  - service.yaml
```

## kubectl kustomize \<kustomize_directory\>

```sh
kubectl kustomize ./kustomize # dry-run으로 실행됨

kubectl apply -kustomize ./kustomize
# or
kubectl apply -k ./kustomize
```
