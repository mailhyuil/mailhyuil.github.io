# kubernetes env

## env

> yaml파일 내에서 환경변수 정의하기
>
> > container의 env 명령어로 확인 가능

```yaml
spec:
  containers:
    - image: nginx
      name: nginx
      env:
        - name: ENV_NAME
          value: ENV_VALUE
```

## envFrom.configMapRef / envFrom.secretRef

> configMap, secret의 모든 값을 가져오기

```yaml
spec:
  containers:
      - image: nginx
      name: nginx
      envFrom:
        - configMapRef:
            name: CONFIG_MAP_NAME
        - secretRef:
            name: SECRET_NAME
```

## env.valueFrom.configMapKeyRef / env.valueFrom.secretKeyRef

> configMap, secret의 일부 값을 가져오기

```yaml
# configMapKeyRef
spec:
  containers:
      - image: nginx
      name: nginx
      env:
        - name: ENV_NAME
          valueFrom:
            configMapKeyRef:
              name: CONFIG_MAP_NAME
              key: KEY_NAME
# secretKeyRef
spec:
  containers:
      - image: nginx
      name: nginx
      env:
        - name: ENV_NAME
          valueFrom:
            secretKeyRef:
              name: SECRET_NAME
              key: KEY_NAME
```

## env.valueFrom.fieldRef / env.valueFrom.resourceFieldRef

> Resource 정보 가져오기

```yaml
# fieldRef : metadata같은 리소스 정보를 가져오기
spec:
  containers:
      - image: nginx
      name: nginx
      env:
        - name: ENV_NAME
          valueFrom:
            fieldRef:
              fieldPath: metadata.namespace
# resourceFieldRef : 리소스의 정보를 가져오기
spec:
  containers:
      - image: nginx
      name: nginx
      env:
        - name: ENV_NAME
          valueFrom:
            resourceFieldRef:
              containerName: CONTAINER_NAME
              resource: RESOURCE_NAME
              divisor: RESOURCE_DIVISOR
```
