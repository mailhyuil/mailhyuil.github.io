# kube Upgrade WorkerNode

## 순서

1. WorkerNode에 ssh 접속
2. kubeadm 업그레이드 (apt)

```sh
# replace x in 1.28.x-* with the latest patch version
apt-mark unhold kubeadm && \
apt-get update && apt-get install -y kubeadm='1.28.x-*' && \
apt-mark hold kubeadm

sudo kubeadm upgrade node
```

3. 노드 드레인

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
