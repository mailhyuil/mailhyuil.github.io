# kube Storage Volume object PersistentVolumes

> 디스크 스토리지들을 용량, 액세스 모드, 볼륨의 수명주기 등을 기반으로 모아놓은 것이다. (disk pool)
>
> > PersistentVolumeClaim은 PersistentVolume을 요청하는 것이다.
> >
> > > Cloud 환경에서는 PersistentVolume을 요청하지 않고 다이나믹 프로비저닝을 사용한다.
> > >
> > > Cloud 환경에서 예비의 Storage를 가지고만 있으면 비용이 계속 발생하기 때문에 다이나믹 프로비저닝으로 요청시 PersistentVolume을 생성하는 것
> > >
> > > > AccessMode : ReadWriteOnce(RWO), ReadOnlyMany(ROX), ReadWriteMany(RWX)

## pv.yaml

> kubectl apply -f pv.yaml
>
> > kubectl get pv

```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: pvname
spec:
  capacity:
    storage: <storage_size> # 5Gi
  accessModes:
    - ReadWriteOnce # ReadOnlyMany, ReadWriteMany
  persistentVolumeReclaimPolicy: Recycle # Retain, Delete
  nfs:
    path: <Share_Storage> # /tmp
    server: <NFS_Server> # 172.17.0.2
#   hostPath:
#     path: /tmp/app-config
```
