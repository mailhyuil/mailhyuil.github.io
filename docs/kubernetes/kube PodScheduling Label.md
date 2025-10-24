# kube PodScheduling Label

> 오브젝트에 label을 지정하고
>
> > 다른 오브젝트는 selector를 이용해서 다른 오브젝트를 참조할 수 있다.

## labels

> pod들을 구분짓기 위한 논리적인 이름
>
> > key, value, operator로 구성

```yml
metadata:
  labels:
    app: backend
    version: v1
```

## kubectl

```sh
kubectl label pod my-pod app=backend
kubectl label pod my-pod version=v1
kubectl label pod my-pod version=v2 --overwrite
kubectl get pod my-pod --show-labels
kubectl get pod -L version
kubectl get pod my-pod --label-columns app.env

kubectl label node my-node gpu=true
kubectl get nodes -L gpu
# label 삭제
kubectl label node my-node gpu-

# --labels === -l
# --label-columns === -L
```
