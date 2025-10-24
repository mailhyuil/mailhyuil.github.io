# kube Storage Volume hostPath

> 노드(호스트)의 디스크 저장
>
> > 파드가 삭제되어도 데이터는 유지된다.
> >
> > > "노드"의 log, config 등을 파드에서 사용할 때 사용한다. (로그 에이전트)

## type

```
Directory : 주어진 경로에 반드시 디렉토리가 존재해야 한다.
DirectoryOrCreate : 주어진 경로에 아무것도 없다면, kubelet이 해당 경로에 디렉토리를 생성한다. (755 권한)
File : 주어진 경로에 반드시 파일이 존재해야 한다.
FileOrCreate  : 주어진 경로에 아무것도 없다면, kubelet이 해당 경로에 File을 생성한다. (755 권한)
```

## yaml

```yml
spec:
  containers:
    - name: nginx
      image: nginx
      volumeMounts:
        - name: my-volume
          mountPath: /var/log/nginx
          readOnly: true # default : read & write
  volumes:
    - name: my-volume
      hostPath:
        path: /data
        type: Directory
    - name: my-volume-2
      hostPath:
        path: /created_dir
        type: DirectoryOrCreate
```
