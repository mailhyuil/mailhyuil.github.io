# kube Resource

## Resource Requests

> container를 실행하기 위해 필요한 최소한의 cpu, memory를 요청하는 것

```yaml
resources:
  requests:
    cpu: "100m"
    memory: "128Mi"
```

## Resource Limits

> container가 사용할 수 있는 최대 cpu, memory를 제한하는 것

```yaml
resources:
  limits:
    cpu: "100m"
    memory: "128Mi"
```
