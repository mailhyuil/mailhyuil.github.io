# kube object Pod

> 노드에서 컨테이너를 실행하기 위한 가장 기본적인 배포 단위
>
> > 여러 노드에 1개 이상의 Pod을 분산 배포/실행 가능 (Pod Replicas)
> >
> > > pod 하나당 1개의 사설 ip를 할당받는다
> > >
> > > 하나의 볼륨과 네트워크를 공유 (pod 내부 컨테이너 간에 localhost로 통신 가능)
> > >
> > > pod 간에는 PodIp를 이용해서 통신
> > >
> > > > 파드는 주로 그 안에서 실행되는 프로세스 또는 애플리케이션이 활성 상태로 유지되는 한 계속 실행됩니다.
> > > >
> > > > 실행중인 프로세스, 애플리케이션이 없으면 자동으로 종료된다. (master node의 controller manager가 주기적으로 pod의 상태를 체크하고 종료된 pod를 재시작한다)

## 명령어

```sh
# pod 생성
kubectl run <pod-name> --image=<image-name> --port=<port> --env <env-name>=<env-value>

# pod 조회
kubectl get pods

# pod 삭제
kubectl delete pod <pod-name>
```

## 단일 컨테이너 패턴

> 하나의 pod에 하나의 container를 지향
