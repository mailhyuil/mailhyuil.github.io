# kubernetes upgrade

> kubelet : Pod와 Container 시작과 같은 작업을 수행하는 컴포넌트
>
> kubeadm : 클러스터를 부트스트랩하는 명령
>
> > kubelet의 버전에 맞춰서 MasterNode의 컴포넌트도 업그레이드 해야한다.

## 순서

> documentation을 반드시 참고하자

1. MasterNode(ControlPlane)에 ssh 접속
2. kubeadm 업그레이드

```sh
# Find the latest 1.28 version in the list.
# It should look like 1.28.x-*, where x is the latest patch.
apt update
apt-cache madison kubeadm

# replace x in 1.28.x-* with the latest patch version
apt-mark unhold kubeadm && \
apt-get update && apt-get install -y kubeadm='1.28.x-*' && \
apt-mark hold kubeadm

kubeadm version # 확인
kubeadm upgrade plan # 업그레이드 가능한지 확인
sudo kubeadm upgrade apply v1.28.x # 업그레이드
```

3. 노드 drain 으로 노드에 있는 Pod를 다른 노드로 이동시키고 비우기

```sh
# replace <node-to-drain> with the name of your node you are draining
kubectl drain <node-to-drain> --ignore-daemonsets
```

4. kubelet과 kubectl 업그레이드

```sh
# replace x in 1.28.x-* with the latest patch version
apt-mark unhold kubelet kubectl && \
apt-get update && apt-get install -y kubelet='1.28.x-*' kubectl='1.28.x-*' && \
apt-mark hold kubelet kubectl
# restart
sudo systemctl daemon-reload
sudo systemctl restart kubelet
```

5. 노드 uncordon

```sh
# replace <node-to-uncordon> with the name of your node
kubectl uncordon <node-to-uncordon>
```
