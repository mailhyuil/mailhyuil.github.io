## ClusterRole (Authorization)

> 어떤 API를 사용할 수 있는지 정의
> 쿠버네티스 리소스에 대한 접근 권한을 정의
> 네임스페이스에 상관없이 전체 클러스터에서 유효
>
> > verbs: create, get, update, delete, patch, watch, list, deletecollection

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  namespace: default
  name: pod-reader
rules:
  - apiGroups: [""] # "" indicates the core API group
    resources: ["pods"]
    verbs: ["get", "watch", "list"]
```
