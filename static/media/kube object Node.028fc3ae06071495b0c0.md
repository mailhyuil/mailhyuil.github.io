# kubernetes Node

> node === 컴퓨터, 서버 컴퓨터
>
> > 고가용성을 위해서 여러 노드 사용 가능

# cordon & uncordon

> cordon(코든) : 저지선, 경계선
>
> > 특정 노드에서 pod가 스케줄링 되지 않도록 설정

```sh
kubectl cordon <node-name>
kubectl uncordon <node-name>
```

# drain

> node에 있는 pod를 다른 node로 옮기고, node를 비운다.

```sh
kubectl drain <node-name> --ignore-daemonsets --force
# --ignore-daemonsets : daemonset(kube-proxy, CNI 등)은 무시하고 옮긴다.
# --force : daemonset 또는 StatefulSet에서 관리하지 않는 pod까지 제거
```