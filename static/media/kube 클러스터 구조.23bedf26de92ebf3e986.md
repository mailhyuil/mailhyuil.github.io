# kubernetes 클러스터 구조

> Master Node와 Worker Node로 구성되어 있다.

## Master Node === Control Plane

> API Server, Scheduler, Controller Manager, Cloud Controller Manager, etcd, DNS
>
> > CSP가 제공

## Worker Node

> kubelet, kube-proxy, Container Runtime, CNI
>
> > 하나의 인스턴스 (e.g. EC2)
