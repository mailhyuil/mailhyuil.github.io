## ClusterRoleBinding

> 유저/그룹 또는 서비스 어카운트와 Role을 연결하는 것
>
> > namespace에 속한 Role을 연결
> >
> > > namespace 제한 없이 접근하려면 ClusterRoleBinding 사용

## 생성

```sh
kubectl create clusterrolebinding <clusterrolebinding-name> --clusterrole=<clusterrole-name> --user=<user-name>
```

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: read-pods
  namespace: default
subjects: # subjects와 roleRef를 연결
  - kind: User # Group, ServiceAccount
    name: jane
    apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: ClusterRole
  name: pod-reader
  apiGroup: rbac.authorization.k8s.io
```
