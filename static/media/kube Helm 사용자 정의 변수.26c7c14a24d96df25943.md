# kube Helm 사용자 정의 변수

## values.yaml 생성

```yaml
replicaCount: 2
service:
  type: NodePort
  port: 80
  nodePort: 30080
```

## install

> 생성한 values.yaml 파일을 사용하여 설치

```sh
helm install my-release -f values.yaml stable/wordpress
```
