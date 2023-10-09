# kubernetes volume

```yml
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
```
