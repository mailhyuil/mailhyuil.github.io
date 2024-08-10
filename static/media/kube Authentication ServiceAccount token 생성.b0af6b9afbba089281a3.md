# serviceaccount token 생성

> 1.24 버전 이후의 k8s를 사용한 클러스터로 작업중이라면
>
> > ServiceAccount와 함께 수동으로 Token을 위한 Secret을 생성해야 합니다.

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: <secret-name>
  namespace: default
  annotations:
    kubernetes.io/service-account.name: <service-account-name>
type: kubernetes.io/service-account-token
```
