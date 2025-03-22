# kubernetes Volume

> Volume이란?
>
> "노드" 내에 있는 스토리지 (hostPath) / NFS (Network File System) / 클라우드 스토리지 (EBS..) 등을 의미한다.
>
> > 컨테이너내에 있는 파일 디렉토리를 Volume에 마운트 시켜서 사용

```txt
1. emptyDir
    > pod에 저장
2. hostPath
    > host에 저장
4. persistentVolume / persistentVolumeClaim
    > persistentVolume이라는 오브젝트를 생성 후 persistentVolumeClaim으로 요청
5. storageClass
    > cloud 환경에서 다이나믹 프로비저닝을 사용하기 위한 오브젝트
```

```yml
spec:
  containers:
    - image: nginx
      name: nginx
      volumeMounts: # 컨테이너의 디렉토리를 볼륨에 마운트
        - name: my-volume
          mountPath: /var/log/nginx
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
```
