# kubectl

> kubernetes cli
>
> > [cheetsheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)

## 명령어

```sh
kubectl config use-context minikube
kubectl config current-context
kubectl config get-contexts

kubectl get node
kubectl get ns #namespace
kubectl get pod
kubectl get pod -A
kubectl get all

kubectl run nginx --image=nginx

kubectl describe pod nginx

kubectl delete pod niginx
```
