# kubernetes ConfigMap

> 개발, 테스트, 운영의 설정 파일들을 관리
>
> > 설정파일을 컨테이너 이미지로부터 분리

```yml
apiVersion: 1
kind: ConfigMap
metadata:
  name: my-config
data:
  SERVER_PORT: 4200
  DB_URL: "postgres://postgres:postgres@localhost:5432/postgres"
```

```yml
spec:
    containers:
        - name: my-app
        image: my-app:1.0
        envFrom:
            - configMapRef:
                name: my-config
```
