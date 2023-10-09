# kubernetes deployment

> 지원하는 기능
>
> > 배포
> > scale out / in
> > rolling update / rollback

## 배포

> kubectl apply -f manifest.yaml

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
  labels:
    app: my-app
spec:
  selector:
    matchLabels:
      app: my-app
  strategy:
    type: Recreate
  # replicaSet
  replicas: 3
  # pod template
  template:
    metadata:
      labels:
        app: my-app
        env: production
        version: v1
    spec:
      containers:
        - name: my-app
          image: hyuil/my-app:1.0
          ports:
            - containerPort: 8080
          resources:
            limits:
              memory: "64Mi"
              cpu: "50m"
```

## scale out / in

```bash
kubectl scale deployment my-app --replicas=3
```

## rolling update / rollback

```bash
kubectl set image deployment my-app my-app=hyuil/my-app:2.0 --record

kubectl rollout status deployment my-app
kubectl rollout history deployment my-app
kubectl rollout undo deployment my-app
kubectl rollout undo deployment my-app --to-revision=1
```
