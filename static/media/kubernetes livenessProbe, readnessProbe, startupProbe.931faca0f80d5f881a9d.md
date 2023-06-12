# kubernetes livenessProbe, readnessProbe

> health check을 위한 기능

## livenessProbe

> app이 충돌 또는 중단되었을 때 감지

```yaml
livenessProbe:
  httpGet:
    path: /
    port: 8080
  initialDelaySeconds: 30
  periodSeconds: 5
  successThreshold: 1
  failureThreshold: 1
  timeoutSeconds: 10
```

## readnessProbe

> 앱이 시작되고 초기화 또는 준비 작업을 수행하는 동안(앱이 트래픽을 처리하지 못하는 동안)은 트래픽을 라우팅하지 못하도록

```yaml
readinessProbe:
  exec:
    command:
      - ls
      - /var/ready
  initialDelaySeconds: 30
  periodSeconds: 5
  successThreshold: 1
  failureThreshold: 1
  timeoutSeconds: 10
```
