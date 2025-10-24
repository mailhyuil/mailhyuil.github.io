# kube Storage Volume object PersistentVolumeClaims

> PersistentVolumeClaims : PersistentVolume요청
>
> > spec을 참조해서 가장 적합한 PersistentVolume을 찾아서 바인딩한다.
> >
> > > 마운트해서 사용

## pvc.yaml

> kubectl apply -f pvc.yaml
>
> > kubectl get pvc

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: myclaim
spec:
  accessModes:
    - ReadWriteOnce
  volumeMode: Filesystem
  resources:
    requests:
      storage: 8Gi
  storageClassName: some-storage-class
  selector:
    matchLabels:
      release: "stable"
    matchExpressions:
      - { key: environment, operator: In, values: [dev] }
```

## pod.yaml

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: mypod
spec:
  containers:
    - name: myfrontend
      image: nginx
      volumeMounts:
        - mountPath: "/var/www/html"
          name: mypd
  volumes:
    - name: mypd
      persistentVolumeClaim:
        claimName: myclaim
```
