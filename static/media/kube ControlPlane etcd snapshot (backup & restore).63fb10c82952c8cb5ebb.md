# etcd snapshot (backup & restore)

> trusted-ca-file, cert-file, key-file 인증서가 필요
>
> > ps -ef | grep kube | grep <option_name> 으로 인증서 경로 확인
> >
> > > ETCDCTL_API=3 는 version을 명시하는 것

## Backup (snapshot save)

```sh
# master node에서 실행
etcd --version
etcdctl version

# backup
ETCDCTL_API=3 etcdctl \
--endpoints=https://127.0.0.1:2379 \
--cacert=<trusted-ca-file> \
--cert=<cert-file> \
--key=<key-file> \
snapshot save <backup-file-location>

# trusted-ca-file, cert-file, key-file 인증서 경로 확인
ps -ef | grep kube | grep trusted-ca-file
ps -ef | grep kube | grep cert-file
ps -ef | grep kube | grep key-file

# example
## backup
ETCDCTL_API=3 etcdctl \
--endpoints=https://127.0.0.1:2379 \
--cacert=/etc/kubernetes/pki/etcd/ca.crt \
--cert=/etc/kubernetes/pki/etcd/server.crt \
--key=/etc/kubernetes/pki/etcd/server.key \
snapshot save /opt/snapshot-pre-boot.db

## restore
ETCDCTL_API=3 etcdctl \
--data-dir /var/lib/etcd-from-backup \
snapshot restore /opt/snapshot-pre-boot.db
```

## Restore (snapshot restore)

```sh
etcdutl --data-dir <data-dir-location> snapshot restore <backup-file>
# backup-file = snapshot save 명령어로 백업된 파일
# data-dir-location = restore된 etcd 데이터가 저장될 디렉토리

# 확인
docker ps -a | grep etcd

# /etc/kubernetes/manifests/etcd.yaml 파일에서
# hostPath.path를 <data-dir-location> 으로 변경
# yaml 파일을 변경하면 etcd pod가 재시작되어 etcd가 새롭게 설치된다.
- hostPath:
    path: <data-dir-location>
    type: DirectoryOrCreate
    name: etcd-data
```
