# kubernetes yaml 파일 생성하기

```sh
# pod
kubectl run nginx --image=nginx --dry-run=client -o yaml > nginx.yaml

# deployment
kubectl create deployment webserver --image=nginx --dry-run=client -o yaml > webserver.yaml
```
