# kube Troubleshooting WorkerNode

> docker-daemon, kubelet, kube-proxy, CNI 확인
>
> > docker-daemon과 kubelet이 실행중인지 확인
> >
> > kubelet이 kube-proxy와 CNI를 실행해준다. (kubelet은 root 권한이 아니기 때문에 kube-proxy를 사용한다.)
> >
> > kube-proxy는 iptables를 사용하여 pod간 통신을 해준다. (root 권한이기에 가능)
> >
> > CNI는 pod의 네트워크를 지원한다.
> >
> > > ssh <worker-node-name> 로 문제가 이 있는 worker node에 접속

## 도커 데몬 확인

```sh
# docker ps로 docker daemon이 실행중인지 확인
docker ps
# 또는 systemctl로 docker daemon이 실행중인지 확인
systemctl status docker

# start 대신 enable을 사용하면 reboot 후에도 kubelet이 실행된다. (영구적으로 실행)
# --now 옵션을 사용하면 지금 바로 실행된다.
# docker 실행
systemctl enable --now docker
```

## kubelet 확인

```sh
# systemctl로 kubelet daemon이 실행중인지 확인
systemctl status kubelet
# kubelet 실행
systemctl enable --now kubelet
```

## kube-proxy 확인

> 클라이언트에서 kubectl로 확인

```sh
# -o wide 옵션을 줘서 NODE 확인하기
kubectl get pods -n kube-system -o wide | grep kube
```

## CNI 확인

> 클라이언트에서 kubectl로 확인

```sh
# -o wide 옵션을 줘서 NODE 확인하기
# CNI 이름으로 찾기
kubectl get pods -n kube-system -o wide | grep calico
```
