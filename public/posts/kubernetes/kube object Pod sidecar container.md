# kubernetes object Pod sidecar container pod

> sidecar: 오토바이 옆에 달린 보조 좌석 // 오토바이가 없으면 움직일 수 없다.
>
> > multi container pod 처럼 여러개의 container를 띄우는 것이지만, sidecar container는 주 container의 동작을 보조하는 역할을 한다.

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
