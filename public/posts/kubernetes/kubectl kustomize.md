# kustomize

> kubectl 에 내장된 기능
> 선언적으로 kubernetes 리소스를 생성하는 도구

## 사용법

> kustomization.yaml 파일을 생성하고, 그 안에 리소스를 정의한다.

```yaml

```

## kubectl kustomize <kustomize_directory>

```sh
kubectl kustomize ./kustomize

kubectl apply -kustomize ./kustomize
# or
kubectl apply -k ./kustomize
```
