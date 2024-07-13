# kubernetes env

## env

> yaml파일 내에서 환경변수 정의하기

```yaml
env:
  - name: ENV_NAME
    value: ENV_VALUE
```

## env.valueFrom : configMap, secret

> configMap, secret의 일부 값을 가져오기

```yaml
# configMapKeyRef
env:
  - name: ENV_NAME
    valueFrom:
      configMapKeyRef:
        name: CONFIG_MAP_NAME
        key: CONFIG_MAP_KEY
# secretKeyRef
env:
  - name: ENV_NAME
    valueFrom:
      secretKeyRef:
        name: SECRET_NAME
        key: SECRET_KEY
```

## valueFrom : Resource 정보 가져오기

```yaml
# fieldRef : metadata같은 리소스 정보를 가져오기
env:
  - name: ENV_NAME
    valueFrom:
      fieldRef:
        fieldPath: metadata.namespace
# resourceFieldRef : 리소스의 정보를 가져오기
env:
  - name: ENV_NAME
    valueFrom:
      resourceFieldRef:
        containerName: CONTAINER_NAME
        resource: RESOURCE_NAME
        divisor: RESOURCE_DIVISOR
```

## envFrom

> configMap, secret의 모든 값을 가져오기

```yaml
envFrom:
  - configMapRef:
      name: CONFIG_MAP_NAME
  - secretRef:
      name: SECRET_NAME
```
