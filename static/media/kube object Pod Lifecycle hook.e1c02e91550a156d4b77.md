# kube object Pod Lifecycle hook

> postStart, preStop 라이프사이클 훅을 사용하여 컨테이너의 시작 및 종료 시 특정 작업을 수행할 수 있습니다.

## pod.yaml

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: lifecycle-demo
spec:
  containers:
    - name: my-container
      image: busybox
      command: ["/bin/sh", "-c", "sleep 3600"]
      lifecycle:
        postStart:
          exec:
            command: ["/bin/sh", "-c", "echo PostStart hook executed >> /var/log/hooks.log"]
        preStop:
          exec:
            command: ["/bin/sh", "-c", "echo PreStop hook executed >> /var/log/hooks.log"]
```
