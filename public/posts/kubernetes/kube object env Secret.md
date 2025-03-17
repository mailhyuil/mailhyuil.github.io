# kubernetes Secret

> 환경변수 or 볼륨으로 사용할 데이터를 저장하는 리소스
>
> > config를 base64로 인코딩하여 저장

## secret 생성

```sh
# generic type : key-value
kubectl create secret generic my-secret --from-env-file=.env

kubectl create secret generic my-secret --from-literal=PASSWORD=1234 --dry-run=client -o yaml > my-secret.yaml

kubectl describe secret my-secret
```

## yaml

```yml
spec:
    containers:
        - name: my-app
        image: my-app:1.0
        volumeMounts:
            - name: my-secret
            mountPath: /etc/secrets
            # readOnly: true
    volumes:
        - name: my-secret
        secret:
            secretName: my-secret

```

```yaml
spec:
    containers:
        - name: my-app
        image: my-app:1.0
    env:
        - name: MY_APP_PASSWORD
        valueFrom:
            secretKeyRef:
                name: my-secret
                key: PASSWORD
```
