# NodePort

> 외부 PORT를 할당
>
> > 트래픽만 받기 위한 용도
> >
> > > 포트만 여는 것과 같다
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
