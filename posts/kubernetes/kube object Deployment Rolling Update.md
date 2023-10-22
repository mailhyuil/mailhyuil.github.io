# kube object Deployment Rolling Update

## rolling update / rollback

```bash
kubectl set image deployment my-app my-app=hyuil/my-app:2.0 --record
# kubectl set image 여러개
kubectl set image deployment my-deployment web-container=new-image-for-web,db-container=new-image-for-db

kubectl rollout status deployment my-app

kubectl rollout history deployment my-app
kubectl rollout history deployment my-app --revision=1 # 특정 revision 조회

kubectl rollout undo deployment my-app
kubectl rollout undo deployment my-app --to-revision=1
```

## revision 갯수 늘리기

> revisionHistoryLimit을 올려주기

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
        - name: my-container
          image: my-image:latest
  revisionHistoryLimit: 3
```
