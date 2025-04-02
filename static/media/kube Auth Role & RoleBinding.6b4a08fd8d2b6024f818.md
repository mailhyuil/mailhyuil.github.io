# kubernetes Authorization Role & RoleBinding

> 순서 : namespace 생성 -> user or serviceaccount 생성 -> role 생성 -> rolebinding 생성
>
> > 지정된 네임스페이스에서만 유효
> >
> > 쿠버네티스 리소스에 대한 접근 권한을 정의
> >
> > > resource: pod, service, deployment, ingress, configmap, secret, pvc, pv, node, namespace, role, rolebinding, clusterrole, clusterrolebinding, serviceaccount
> > >
> > > verbs: create, get, update, delete, patch, watch, list, deletecollection

## 생성

### cli로 생성

```sh
k create namespace <namespace-name>

k create serviceaccount <service-account-name> -n <namespace-name>

k create role <role-name> --verb=<verb> --resource=<resource> -n <namespace>

k create rolebinding <rolebinding-name> --role=<role-name> --serviceaccount=<namespace>:<service-account-name> -n <namespace>

k describe role <role-name> -n <namespace>
```

### yaml로 생성

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: default
  name: pod-reader
rules:
  - apiGroups: [""] # "" 만 넣으면 ALL API에게 라는 뜻
    resources: ["pods"]
    verbs: ["get", "watch", "list"]
```
