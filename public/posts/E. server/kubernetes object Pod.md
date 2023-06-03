# pod

> 여러 컨테이너(콩)를 감싸고 있는 콩껍질과 같다
>
> > 노드에서 컨테이너를 실행하기 위한 가장 기본적인 배포 단위
> >
> > > 여러 노드에 1개 이상의 Pod을 분산 배포/실행 가능 (Pod Replicas)
> > >
> > > > pod 하나당 1개의 사설 ip를 할당받는다
> > > >
> > > > > 하나의 볼륨과 네트워크를 공유 (pod 내부 컨테이너 간에 localhost로 통신 가능)
> > > > >
> > > > > > pod 간에는 PodIp를 이용해서 통신

## 명령어

```sh
kubectl get pods
kubectl delete pod <pod-name>
```
