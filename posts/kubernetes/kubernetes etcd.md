# etcd

> master node (control plane)에 설치되어 있는 데이터베이스 (제어 시 master node에 접속해라)
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
> >
> > > ETCDCTL_API=3 는 version을 명시하는 것

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
# snapshotdb = snapshot save 명령어로 백업된 파일
# data-dir-location = 새롭게 etcd를 설치한 디렉토리
ETCDCTL_API=3 etcdctl snapshot restore --data-dir <data-dir-location> snapshotdb
# data-dir-location 디렉토리에 snapshotdb 파일이 생성된다.
# /etc/kubernetes/manifests/etcd.yaml 파일의 - hostPath: path: /var/lib/etcd/ 를 data-dir-location 으로 변경
# yaml 파일을 변경하면 etcd pod가 재시작되어 etcd가 새롭게 설치된다.
# 확인 : docker ps -a | grep etcd
```
