# kube Auth AdmissionControl ResourceQuota

> 네임스페이스별 총 리소스 사용을 제한하는 제약 조건
>
> > namespace 단위로 설정
> >
> > > CPU / Memory의 리소스를 제한
> > >
> > > 생성가능한 오브젝트 수를 제한

## yaml

```yaml
apiVersion: v1
kind: ResourceQuota
metadata:
  name: my-rq
spec:
  hard:
    requests.cpu: "1000"
    requests.memory: 200Gi
    limits.cpu: "1000"
    limits.memory: 200Gi
    # cpu: "1000"
    # memory: 200Gi

    pods: "10"
    replicationcontrollers: "20"
    services: "10"
    services.loadbalancers: "5"
    services.nodeports: "5"
    configmaps: "10"
    secrets: "10"
    persistentvolumeclaims: "5"

    ssd.storageclass.storage.k8s.io/persistentvolumeclaims: 2
```

## list로 여러개 생성

```yaml
apiVersion: v1
kind: List
items:
  - apiVersion: v1
    kind: ResourceQuota
    metadata:
      name: pods-high
    spec:
      hard:
        cpu: "1000"
        memory: 200Gi
        pods: "10"
      scopeSelector:
        matchExpressions:
          - operator: In
            scopeName: PriorityClass
            values: ["high"]
  - apiVersion: v1
    kind: ResourceQuota
    metadata:
      name: pods-medium
    spec:
      hard:
        cpu: "10"
        memory: 20Gi
        pods: "10"
      scopeSelector:
        matchExpressions:
          - operator: In
            scopeName: PriorityClass
            values: ["medium"]
  - apiVersion: v1
    kind: ResourceQuota
    metadata:
      name: pods-low
    spec:
      hard:
        cpu: "5"
        memory: 10Gi
        pods: "10"
      scopeSelector:
        matchExpressions:
          - operator: In
            scopeName: PriorityClass
            values: ["low"]
```
