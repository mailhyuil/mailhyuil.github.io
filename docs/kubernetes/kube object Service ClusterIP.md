# kube object Service ClusterIP

> 여러 파드를 묶어서 로드밸런싱할 수 있는 ClusterIP만 할당
>
> > 외부에서는 접근할 수 없다. / 같은 클러스터 내부에서만 접근 가능
> >
> > > private 서비스들에 이용
> > >
> > > > Service Default 타입

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
