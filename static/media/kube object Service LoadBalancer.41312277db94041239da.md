# LoadBalancer

> 외부 IP를 할당 받는다 (클라우드 업체의 로드밸러서와 연동)
>
> > 클라우드 서비스에서 제공하는 LoadBalancer를 "프로비저닝" 즉 연동하여 사용
> >
> > > 프로덕션 환경에서 사용

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
  type: LoadBalancer # type
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
