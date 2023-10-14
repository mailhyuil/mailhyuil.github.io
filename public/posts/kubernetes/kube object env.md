# kubernetes env

## env

```yaml
env:
  - name: ENV_NAME
    value: ENV_VALUE
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
# fieldRef
env:
  - name: ENV_NAME
    valueFrom:
      fieldRef:
        fieldPath: metadata.namespace
# resourceFieldRef
env:
  - name: ENV_NAME
    valueFrom:
      resourceFieldRef:
        containerName: CONTAINER_NAME
        resource: RESOURCE_NAME
        divisor: RESOURCE_DIVISOR
```
