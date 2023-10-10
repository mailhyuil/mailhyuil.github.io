# ClusterIP

> 내부 IP만 할당
>
> > 기본 Service 타입
> >
> > > 외부에서는 접근할 수 없는 내부 ip를 할당받는다
> > >
> > > > private 서비스들에 이용

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
  type: ClusterIP # type
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
