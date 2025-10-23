# kubernetes object Pod multi container pod

> 단순히 여러개의 containers를 띄우면 된다.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: multi-container-pod
spec:
    containers:
    - name: nginx
        image: nginx
    - name: redis
        image: redis
    - name: nodejs
        image: nodejs
```
