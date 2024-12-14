# kube object Deployment Rolling Update

## rolling update / rollback

```bash
# rolling update (또는 그냥 edit으로 변경해도 된다)
kubectl set image deployment <deploy_name> <container_name>=nginx:1.17 --record

# rolling update (multi container)
kubectl set image deployment <deploy_name> <container_name>=nginx:1.17,<container_name>=postgres:9.6 --record

# 현재 상태를 annotate (CHANGE-CAUSE) // 또는 --record 옵션 사용하면 자동으로 변경 사유 기록
kubectl annotate deployment <deploy_name> kubernetes.io/change-cause="Rolling update to version 1.17"

# 상태 확인
kubectl rollout status deployment <deploy_name>

# 특정 revision 조회
kubectl rollout history deployment <deploy_name>
kubectl rollout history deployment <deploy_name> --revision=1

# rollback
kubectl rollout undo deployment <deploy_name> # 이전 버전으로 롤백
kubectl rollout undo deployment <deploy_name> --to-revision=1 # 특정 버전으로 롤백
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
