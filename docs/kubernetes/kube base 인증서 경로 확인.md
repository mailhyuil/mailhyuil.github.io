# kube base 인증서 경로 확인

```sh
ps -ef | grep kube | grep <option_name> 으로 인증서 경로 확인
# (e.g. <trusted-ca-file>)
# ps -ef | grep kube | grep trusted-ca-file
# --trusted-ca-file=/var/lib/minikube/certs/ca.crt
```
