# kube object env ConfigMap

> 개발, 테스트, 운영의 설정 파일들을 관리
>
> > 설정파일을 컨테이너 이미지로부터 분리

## config 생성

```sh
kubectl create configmap my-config --from-env-file=.env

kubectl create configmap my-config --from-literal=BASE_URL=http://localhost:8080 --dry-run=client -o yaml > my-config.yaml

kubectl describe configmap my-config
```

## yaml

```yml
apiVersion: 1
kind: ConfigMap
metadata:
  name: my-config
data:
  SERVER_PORT: 4200
  DB_URL: "postgres://postgres:postgres@localhost:5432/postgres"
spec:
  containers:
      - name: my-app
      image: my-app:1.0
      # envFrom:
      #   - configMapRef:
      #   name: my-config
      env:
        - name: MY_APP_BASE_URL # my-config에 있는 BASE_URL을 MY_APP_BASE_URL이라는 이름으로 가져온다.
        valueFrom:
          configMapKeyRef:
            name: my-config
            key: BASE_URL
```
