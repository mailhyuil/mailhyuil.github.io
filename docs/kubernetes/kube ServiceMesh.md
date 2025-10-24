# kube ServiceMesh

> East-West Traffic(Pod to Pod)을 처리하기 위한 패턴
>
> > 그물망처럼 연결된 통신들의 사이에서 로깅, 모니터링, 트래픽 제어, 보안을 통해 관리하기 위한 패턴

## Pod to Pod 통신

```txt
# 기본
Pod <-> Pod

# service mesh (istio)
Pod <-> Envoy <-> Pod
Envoy에서 모든 트래픽을 가로채고 처리함
```
