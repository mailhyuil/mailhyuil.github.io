# kube base

> 컨테이너들을 관리하기 위한 플랫폼
>
> > 선언적 구성과 자동화를 용이하게 해준다.
> >
> > > 서비스 디스커버리, 로드밸런싱, 스토리지 오케스트레이션, 롤아웃과 롤백, 빈 패킹, 자동 복구, 시크릿과 구성 관리
> > >
> > > > 쿠버네티스는 도커가 아닌 컨테이너(containerd)를 관리한다. (도커에 대한 지원을 중단했다.)

## ~/.kube (local)

```txt
cache      config     http-cache
```

## /etc/kubernetes (master node)

```txt
addons      controller-manager.conf  manifests
admin.conf  kubelet.conf             scheduler.conf
```
