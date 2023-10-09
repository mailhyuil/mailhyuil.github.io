# kubernetes object Pod multi-container pod

## multi-container pod

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

## sidecar container pod

> sidecar: 오토바이 옆에 달린 보조 좌석 // 오토바이가 없으면 움직일 수 없다.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: sidecar-pod
spec:
    volumes:
    - name: shared-log
        emptyDir: {}
    containers:
    - name: nginx
        image: nginx
        volumeMounts:
        - name: shared-log
            mountPath: /var/log/nginx
    - name: sidecar
        image: busybox
        volumeMounts:
        - name: shared-log
            mountPath: /var/log/nginx
        command: ['sh', '-c', 'while true; do sleep 3600; done']
```
