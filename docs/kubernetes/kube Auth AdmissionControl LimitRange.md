# kube Auth AdmissionControl LimitRange

> 네임스페이스 내에서 파드나 컨테이너는 네임스페이스의 ResourceQuota에 정의된 만큼의 CPU와 메모리를 사용할 수 있음
>
> > 이 때 하나의 파드 또는 컨테이너가 사용 가능한 모든 리소스를 독점할 수 있다는 우려가 있다
> >
> > > 네임스페이스에서 움직이는 포드 하나하나의 리소스량의 상한을 설정
> > >
> > > > request, limit의 하한값과 상한값을 지정할 수 있음

## yaml

```yaml
apiVersion: v1
kind: LimitRange
metadata:
  name: cpu-resource-constraint
spec:
  limits:
    # - type: Container
     - type: Pod
    # - type: PersistentVolumeClaim
      default: # this section defines default limits
        cpu: 500m
      defaultRequest: # this section defines default requests
        cpu: 500m
      max: # max and min define the limit range
        cpu: "1"
      min:
        cpu: 100m
```
