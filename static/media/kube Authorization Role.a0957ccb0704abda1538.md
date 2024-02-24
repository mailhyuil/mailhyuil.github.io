## Role (Authorization)

> 어떤 API를 사용할 수 있는지 정의
>
> 쿠버네티스 리소스에 대한 접근 권한을 정의
>
> 지정된 네임스페이스에서만 유효
>
> > 순서 : namespace -> user or serviceaccount -> role -> rolebinding
> >
> > > resource: pod, service, deployment, ingress, configmap, secret, pvc, pv, node, namespace, role, rolebinding, clusterrole, clusterrolebinding, serviceaccount
> > >
> > > verbs:create, get, update, delete, patch, watch, list, deletecollection

## 생성

```sh
kubectl create role <role-name> --verb=<verb> --resource=<resource> -n <namespace>
```

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
