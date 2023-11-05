# kubernetes namespace

> kubectl get 명령을 하면 현재 namespace의 리소스만 보여준다. (기본 default)

## yaml

```yaml
metadata:
  namespace: <namespace>
```

## 명령어

```sh
# 네임스페이스 생성
kubectl create namespace <namespace-name>

# 현재 네임스페이스 변경
kubectl config set-context --current --namespace=NAMESPACE

# 네임스페이스의 모든 리소스 조회
kubectl get all -n <namespace>

 # 모든 네임스페이스의 pod 조회
kubectl get pods -A
```
