# etcd

> 쿠버네티스를 실행하는데 필요한 데이터들을 저장하기 위해 사용하는 데이터베이스
>
> > etcd가 다운되면 모든 컴포넌트가 고아상태가 되기 때문에 가용성이 중요
> >
> > > 클러스터링하여 분산 실행하는 RSM(Replicated State Machine) 구조
> > >
> > > > /var/lib/etcd/ 디렉토리에 데이터 저장

## Backup

> trusted-ca-file, cert-file, key-file 인증서가 필요
>
> > ps -ef | grep kube | grep <option_name> 으로 인증서 경로 확인

```sh
ETCDCTL_API=3 etcdctl \
--endpoints=https://127.0.0.1:2379 \
--cacert=<trusted-ca-file> \
--cert=<cert-file> \
--key=<key-file> \
snapshot save <backup-file-location>
```

## Restore

```sh
ETCDCTL_API=3 etcdctl snapshot restore --data-dir <data-dir-location> snapshotdb
```
