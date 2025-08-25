# kube object Deployment Canary Deployment

> 점진적으로 바꾸는 방식
>
> 모니터링이 가능

## 방법

> blue app과 green app을 따로 만들되, 공통된 label을 가지게 한다. (name: app, version: blue) (name: app, version: green)
>
> > service에서 selector로 공통된 label을 설정한다. (name: app)
> >
> > > blue app, green app의 replicas를 조절해서 카나리 배포를 구현 (kubectl edit deploy) or (kubectl scale deploy --replicas=3)

```yaml
# blue deploy
labels:
  name: app
  version: stable
# green deploy
labels:
  name: app
  version: new
# service
selector:
  name: app
```
