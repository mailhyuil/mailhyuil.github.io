# kube Troubleshooting Monitor

## kubectl top

> cpu, memory 사용량 확인

```sh
kubectl top pods --sort-by=cpu # --sort-by=memory
kubectl top pods my-pod

kubectl top nodes --sort-by=cpu # --sort-by=memory
kubectl top nodes my-node
```

## --sort-by

> 특정 컬럼으로 정렬

```sh
kubectl get pods --sort-by=.metadata.name
--sort-by=.metadata.name
--sort-by=.metadata.namespace
--sort-by=.spec.capacity.storage
```
