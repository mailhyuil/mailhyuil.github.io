# kube object Service NodePort

> ClusterIp 생성 + 외부에서 노드에 접속할 수 있도록 노드 IP의 PORT를 할당
>
> 같은 VPC 내에서만 접속 가능!!
>
> (다른 망에서 접속하려면 LoadBalancer 사용)
>
> > e.g.
> >
> > ClusterIp : 10.x.x.x
> >
> > NodeIp:port : 10.0.2.11:30000, 10.0.2.12:30000
> >
> > 10.0.2.12:30000(k8s-worker1:30000)으로 접속 가능
> >
> > 30000 ~ 32767 사이의 포트를 할당
>
> > > 트래픽만 받기 위한 용도
> > >
> > > > nodeIp:nodePort로 접근
> > > >
> > > > > 개발 및 테스트 환경에서 사용

```yaml
---
apiVersion: v1
kind: Service
metadata:
  name: order
  namespace: snackbar
  labels:
    service: order
    project: snackbar
spec:
  type: NodePort # type
  selector:
    service: order
    project: snackbar
  ports:
    - port: 80
      targetPort: 8080

---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: order
  namespace: snackbar
  labels:
    service: order
    project: snackbar
spec:
  replicas: 2
  selector:
    matchLabels:
      service: order
      project: snackbar
  template:
    metadata:
      labels:
        service: order
        project: snackbar
    spec:
      containers:
        - name: order
          image: hyuil/order:1.0
          ports:
            - containerPort: 8080
          resources:
            limits:
              memory: "64Mi"
              cpu: "50m"
---
```
