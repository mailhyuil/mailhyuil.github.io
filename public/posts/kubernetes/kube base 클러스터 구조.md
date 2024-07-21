# kubernetes 클러스터 구조

> Master Node와 Worker Node로 구성되어 있다.

## Master Node === Control Plane

> API Server, Scheduler, Controller Manager, Cloud Controller Manager, etcd, DNS
>
> > CSP가 제공

### API Server

> kubectl 명령을 받아서 인증 및 작업을 수행
>
> > 6443 port

### Scheduler

> Pod를 어느 노드에 배치할지 결정

### Controller

> 클러스터의 상태를 관찰하고, 상태를 변경하는 작업을 수행 (e.g. replication 갯수 유지)

### Cloud Controller Manager

> 클라우드 공급자와 통신하는 컨트롤러

### coreDNS

> DNS 서버

### etcd

> 클러스터의 모든 정보를 저장하는 key-value 저장소

## Worker Node

> kubelet, kube-proxy, Container Runtime, CNI
>
> > 하나의 인스턴스 (e.g. EC2)

### kubelet

> Master Node의 API Server와 통신하여 docker engine을 통해 Pod를 실행

### Container Runtime (e.g. docker-engine)

> container를 실행하는 데 사용

### kube-proxy

> Pod의 네트워크 트래픽을 관리

### CNI

> Container Network Interface
>
> > container들이 서로 통신할 수 있도록 네트워크를 설정
