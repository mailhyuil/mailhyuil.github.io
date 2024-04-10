# kube Annotation

> 롤백 이유를 남기는 용도로 사용

```sh
kubectl rollout undo deployment my-app --to-revision=1
kubectl annotate deployment my-app kubernetes.io/change-cause="this is the reason"
```
