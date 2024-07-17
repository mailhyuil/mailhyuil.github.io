# etcd

> consistent and highly-available key value store used as Kubernetes' backing store for all cluster data.
>
> > 키-값 형태로 저장하는 영구 저장소로, 쿠버네티스 클러스터 데이터를 저장하는데 사용된다.

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
