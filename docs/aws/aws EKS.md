# aws EKS

> eks 생성 -> config -> kubectl

## aws-cli config

```sh
aws configure

aws eks update-kubeconfig --name <cluster-name> --region <region-name>
# aws --profile sangbaek eks --region ap-northeast-2 update-kubeconfig --name my-cluster --alias my-cluster

kubectl config use-context <cluster-name>
```

## subnet tag

> EKS Cluster 및 NodeGroup이 실행될 대상 Subnet에는 반드시 해당 Tag가 있어야함
>
> > subnet끼리 통신하기 위해서 반드시 tagName을 아래와 같이 지정해야함

```sh
Key-kubernetes.io/cluster/<eks-cluster-name>
Value-shared
```
