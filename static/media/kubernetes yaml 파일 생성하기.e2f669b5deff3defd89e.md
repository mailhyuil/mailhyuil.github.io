# kubernetes yaml 파일 생성하기

```sh
kubectl run nginx --image=nginx --dry-run=client -o yaml > nginx.yaml
```
