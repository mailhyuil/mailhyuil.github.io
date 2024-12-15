# kube base kubeadm (Upgrade)

> kubernetes를 설치해주는 도구
>
> > 클러스터를 부트스트랩하는 명령이다.

## 준비

### package manage update

```sh
#ubuntu
sudo apt update
sudo apt-cache madison kubeadm
```

### Upgrade kubeadm

```sh
# replace x in 1.32.x-* with the latest patch version
sudo apt-mark unhold kubeadm && \
sudo apt-get update && sudo apt-get install -y kubeadm='1.32.x-*' && \
sudo apt-mark hold kubeadm

# check version
kubeadm version

# check upgrade plan
sudo kubeadm upgrade plan
```

## Upgrade

## upgrade apply (ControlPlane) / upgrade node (Worker)

```sh
# ControlPlane을 업그레이드 할 때 사용
sudo kubeadm upgrade apply v1.32.x

# Worker를 업그레이드 할 때 사용
sudo kubeadm upgrade node
```

### drain node

```sh
# replace <node-to-drain> with the name of your node you are draining
kubectl drain <node-to-drain> --ignore-daemonsets
```

### Upgrade kubelet and kubectl

```sh
# replace x in 1.32.x-* with the latest patch version
sudo apt-mark unhold kubelet kubectl && \
sudo apt-get update && sudo apt-get install -y kubelet='1.32.x-*' kubectl='1.32.x-*' && \
sudo apt-mark hold kubelet kubectl
```

### daemon restart

```sh
# restart kubelet
sudo systemctl daemon-reload
sudo systemctl restart kubelet
```

### uncordon node

```sh
# replace <node-to-uncordon> with the name of your node
kubectl uncordon <node-to-uncordon>
```
