# kubernetes Volume

> Volume이란?
>
> "노드" 내에 있는 스토리지 (hostPath) / NFS (Network File System) / 클라우드 스토리지 (EBS..) 등을 의미한다.
>
> > 컨테이너내에 있는 파일 디렉토리를 Volume에 마운트 시켜서 사용

```yml
spec:
  volumes: # 볼륨으로 사용할 스토리지를 지정 (hostPath / azureDisk / fc / awsElasticBlockStore..)
    - name: my-volume
      hostPath:
        path: /data
        type: Directory
    - name: aws-volume
      awsElasticBlockStore:
        volumeID: <volume-id>
        fsType: ext4
    - name: azure-volume
      azureDisk:
        diskName: <volume-id>
        diskURI: <volume-uri>
        fsType: ext4

  containers:
    - image: nginx
      name: nginx
      volumeMounts: # 컨테이너의 디렉토리를 볼륨에 마운트
        - name: my-volume
          mountPath: /var/log/nginx
```
