# kubernetes namespace

## 명령어

```sh
# 네임스페이스 생성
kubectl create namespace <namespace-name>
# 네임스페이스의 모든 리소스 조회
kubectl get all -n <namespace>
# 네임스페이스 service 상세 조회
kubectl get svc <service-name> -o wide -n <namespace>
# service cluster ip 조회
kubectl get svc <service-name> -o jsonpath="{.spec.clusterIP}" -n <namespace>
```
