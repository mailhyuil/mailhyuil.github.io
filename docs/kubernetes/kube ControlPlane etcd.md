# kube ControlPlane etcd

> 키-값 형태로 저장하는 영구 저장소로, 쿠버네티스 클러스터 데이터를 저장하는데 사용된다.
>
> > master node (control plane)에 설치되어 있는 데이터베이스 (제어 시 master node에 접속해라)
> >
> > 쿠버네티스를 실행하는데 필요한 데이터들을 저장하기 위해 사용하는 데이터베이스
> >
> > > etcd가 다운되면 모든 컴포넌트가 고아상태가 되기 때문에 가용성이 중요
> > >
> > > > master node의 /etc/kubernetes/manifests 디렉토리에 etcd.yaml을 읽어서 static pod로 실행됨
> > > >
> > > > > /var/lib/etcd/ 디렉토리에 데이터 저장

## install

```sh
https://github.com/etcd-io/etcd/releases/

## brew
brew install etcd
```

## usage

```sh
etcdctl --endpoints=$ENDPOINT put <key> <value>
etcdctl --endpoints=$ENDPOINT get <key>
etcdctl --endpoints=$ENDPOINT del <key>
```
