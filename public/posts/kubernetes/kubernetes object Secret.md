# kubernetes Secret

> 환경변수 or 볼륨으로 사용할 데이터를 저장하는 리소스

## 환경변수

```yml

```

## 볼륨

```yml
spec:
    volumes:
        -name: my-secret
        secret:
            secretName: my-secret
    containers:
        - name: my-app
        image: my-app:1.0
        volumeMounts:
            - name: my-secret
            mountPath: /etc/secrets
            readOnly: true
```
