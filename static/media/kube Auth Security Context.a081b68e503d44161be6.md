# kube Security Context

> pod나 container를 무슨 권한으로 실행할 것인지 정의
>
> 또한 이 권한은 무엇을 할 수 있고 할 수 없는지 정의
>
> > 컨테이너의 루트권한으로 노드를 제어하는 것을 허용해주는 기능
> >
> > UID, GID를 통해 컨테이너의 권한을 제어하는 기능
> >
> > > 컨테이너에 지정한 보안 설정은 개별 컨테이너에만 적용된다.
> > >
> > > 컨테이너에 지정한 보안 설정은 파드에 지정한 보안 설정보다 우선 적용된다.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  securityContext: # pod에 지정한 보안 설정
    runAsUser: 1000 # 파드를 UID 1000번으로 실행
    runAsGroup: 3000 # 파드를 GID 3000번으로 실행
  containers:
    - name: my-container
      image: busybox
      securityContext: # container에 지정한 보안 설정
        runAsUser: 2000 # 컨테이너를 UID 2000번으로 실행 (파드 runAsUser보다 우선 적용된다)
        runAsNonRoot: true # 컨테이너를 root권한으로 실행하지 않도록 설정
        allowPrivilegeEscalation: false # capabilities를 통해 컨테이너의 권한을 제어할 수 있도록 설정 (기본값: true) false로 되어있으면 capabilities 설정이 무시된다.
        capabilities: # 컨테이너가 사용할 수 있는 리눅스 커널 기능을 허용
          - add: ["NET_ADMIN", "SYS_TIME"] # 컨테이너가 이 기능들을 사용할 수 있도록 허용
            drop: []
```
