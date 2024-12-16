# kubernetes Authorization ClusterRole & ClusterRoleBinding

> 순서 : user or serviceaccount 생성 -> clusterrole 생성 -> clusterrolebinding 생성
>
> > 네임스페이스에 상관없이 전체 클러스터에서 유효
> >
> > 쿠버네티스 리소스에 대한 접근 권한을 정의
> >
> > > resource: pod, service, deployment, ingress, configmap, secret, pvc, pv, node, namespace, role, rolebinding, clusterrole, clusterrolebinding, serviceaccount
> > >
> > > verbs: create, get, update, delete, patch, watch, list, deletecollection

## 생성

### cli로 생성

```sh
k create serviceaccount <service-account-name> -n <namespace-name>

k create clusterrole <role-name> --verb=<verb> --resource=<resource>

k create clusterrolebinding <rolebinding-name> --clusterrole=<role-name> --serviceaccount=<namespace>:<service-account-name>

k describe clusterrole <role-name>
```

### yaml로 생성

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
