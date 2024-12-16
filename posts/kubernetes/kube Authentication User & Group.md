# 유저 인증 (Authentication)

> client 유저가 kubernetes API 서버에 접근할 때 인증
>
> CSR 인증서를 통해 인증
>
> > 유저네임과 인증서 생성 -> CSR(Certificate Signing Request) 인증서 생성 -> Role -> RoleBinding
> >
> > > ~/.kube/config 파일에 사용자 정보가 저장되어 있음
> > >
> > > > set-credentials, get-users

# 인증서 키 생성

```sh
# 키 생성
openssl genrsa -out <인증서이름>.key 2048
# csr 요청 파일 생성
openssl req -new -key <인증서이름>.key -out <인증서이름>.csr -subj "/CN=<인증서이름>"
```

# CSR 생성

```sh
cat > <인증서이름>.yaml
apiVersion: certificates.k8s.io/v1
kind: CertificateSigningRequest
metadata:
  name: <유저이름>
spec:
  request: <인증서 base64 인코딩>
  signerName: kubernetes.io/kube-apiserver-client
  expirationSeconds: 86400  # one day
  usages:
  - client auth
```

## CSR 요청 파일을 base64로 인코딩

> output을 위의 파일의 request에 붙여넣기

```sh
cat <인증서 이름>.csr | base64 | tr -d "\n"
```

## 생성

```sh
kubectl apply -f <인증서이름>.yaml

# 요청을 승인
kubectl certificate approve <유저이름>

# 확인
kubectl get csr

# 승인된 csr 인증서를 유저의 crt 파일로 저장
kubectl get csr <유저이름> -o jsonpath='{.status.certificate}'| base64 -d > <유저이름>.crt
```

## .kube/config에 추가

```sh
kubectl config set-credentials <유저이름> --client-key=<유저이름>.key --client-certificate=<유저이름>.crt --embed-certs=true

kubectl config set-context <유저이름> --cluster=kubernetes --user=<유저이름>

kubectl config use-context <유저이름>
```
