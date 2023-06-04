# kubernetes livenessProbe, readnessProbe

## livenessProbe

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
