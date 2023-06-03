# kubectl

> kubernetes cli
>
> > [cheetsheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)

## 명령어

```sh
kubectl config use-context minikube
kubectl config current-context
kubectl config get-contexts

kubectl run nginx --image=nginx # 명령형으로 그냥 실행

kubectl apply -f <file_path> # yaml 파일을 읽어서 선언형으로 실행

# get 확인
kubectl get node
kubectl get ns #namespace
kubectl get rs #replicaSet
kubectl get pod
kubectl get pod -A
kubectl get pod -o wide
kubectl get pod --show-labels
kubectl get pod <pod-name> -o jsonpath="{.metadata.ownerReferences[0].name}"
kubectl get all

# delete 삭제
kubectl delete pod niginx

# describe 이벤트 확인
kubectl describe pod nginx

# scale replica 개수 조절
kubectl scale rs my-replicaset-name --replicas=3

# image 변경
kubectl set image rs/<replicaset-name> <container>=<image>
```
