# kubernetes emptyDir

> 파드내에서 컨테이너간에 파일을 공유할 때 사용하는 임시 저장소
>
> 노드(호스트)에 저장되는 것이 아니라 파드에 저장된다.
>
> > pod가 삭제되면 데이터도 삭제된다.
> >
> > > 동일한 pod에서 실행되는 컨테이너 간에 파일을 공유할 때 사용한다.

```yml
spec:
  containers:
    - name: nginx
      image: nginx
      volumeMounts:
        - name: shared-log
          mountPath: /var/log/nginx
          readOnly: true # default : read & write
  volumes:
    - name: shared-log
      emptyDir: {}
```
