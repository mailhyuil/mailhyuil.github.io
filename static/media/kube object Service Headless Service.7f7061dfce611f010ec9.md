# Headless service

> 쿠버네티스 서비스 생성 시 .spec.clusterIP 필드 값을 None으로 설정하면 클러스터 IP가 없는 서비스를 만들 수 있습니다. 이런 서비스를 '헤드리스 서비스(Headless Service)'라고 합니다.
>
> 쿠버네티스의 구현에 의존하지 않고도 다른 서비스 디스커버리 메커니즘과 인터페이스할 수 있다.
>
> service는 여러 파드 중 하나에 트래픽을 전송한다
>
> service의 endpoint가 없는 경우(headless) service는 가지고 있는 pod의 dns를 반환
>
> 이를 순회하면 모든 파드에 전송 가능
>
> 파드의 ip를 직접 얻을 수 있다.
>
> 클러스터 내에서만 사용 (밖으로 노출되지 않는다.)
>
> POD IP목록을 직접 조회가 필요한 아키텍처에서 사용
>
> > selector가 필요
> >
> > > service clusterIP를 생성하면 clusterIP에 my-svc 도메인 이름이 붙음
> > >
> > > headless로 생성하면 my-svc라는 도메인 이름이 podIP에 붙게 됨 그래서 전부 반환하는것

```sh
nginx-64cd7dbdc5-2858c   1/1     Running   0          61s   10.100.19.19    test-default-worker-node-0   <none>           <none>
nginx-64cd7dbdc5-888rb   1/1     Running   0          61s   10.100.19.20    test-default-worker-node-0   <none>           <none>
nginx-64cd7dbdc5-drb72   1/1     Running   0          61s   10.100.119.50   test-default-worker-node-1   <none>           <none>
nginx-64cd7dbdc5-rn99v   1/1     Running   0          78s   10.100.119.48   test-default-worker-node-1   <none>           <none>
nginx-64cd7dbdc5-wvgfl   1/1     Running   0          61s   10.100.119.49   test-default-worker-node-1   <none>           <none>
```

```sh
Name:   my-svc.default.svc.cluster.local
Address: 10.100.119.50
Name:   my-svc.default.svc.cluster.local
Address: 10.100.19.20
Name:   my-svc.default.svc.cluster.local
Address: 10.100.19.19
Name:   my-svc.default.svc.cluster.local
Address: 10.100.119.48
Name:   my-svc.default.svc.cluster.local
Address: 10.100.119.49
```
