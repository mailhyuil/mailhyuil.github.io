# LimitRange

> Admission Control Plugin
>
> > pod 단위로 설정
> >
> > > request, limit의 하한값과 상한값을 지정할 수 있음

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
