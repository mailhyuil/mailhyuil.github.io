# kube Security Context

> container가 실행될 때 적용되는 보안 관련 설정
>
> > 컨테이너의 루트권한으로 노드를 제어하는 것을 허용해주는 기능
> >
> > > 컨테이너에 지정한 보안 설정은 개별 컨테이너에만 적용된다.
> > > 컨테이너에 지정한 보안 설정은 파드에 지정한 보안 설정보다 우선 적용된다.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  securityContext: # pod에 지정한 보안 설정
    runAsUser: 1000 # UID 1000번으로 실행
    runAsGroup: 3000 # GID 3000번으로 실행
  containers:
    - name: my-container
      image: busybox
      securityContext: # container에 지정한 보안 설정
        runAsUser: 2000 # UID 2000번으로 실행
        runAsNonRoot: true # root권한으로 실행하지 않도록 설정
        allowPrivilegeEscalation: false # root권한으로 노드를 제어하는 것을 허용하지 않도록 설정
        capabilities: # 컨테이너가 사용할 수 있는 리눅스 커널 기능을 허용
          - add: ["MAC_ADMIN"] # 컨테이너가 MAC_ADMIN 기능을 사용할 수 있도록 허용
            drop: []
```
