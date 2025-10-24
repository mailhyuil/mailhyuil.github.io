# kube ControlPlane kubeadm - Upgrade

> kubernetes를 설치해주는 도구
>
> > 클러스터를 부트스트랩하는 명령이다.

```sh
# ssh to node to upgrade
ssh <node-to-upgrade>

###### 저장소 추가 #####
sudo apt-get update
# apt-transport-https may be a dummy package; if so, you can skip that package
sudo apt-get install -y apt-transport-https ca-certificates curl gpg
# If the directory `/etc/apt/keyrings` does not exist, it should be created before the curl command, read the note below.
# sudo mkdir -p -m 755 /etc/apt/keyrings
curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.32/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg
# This overwrites any existing configuration in /etc/apt/sources.list.d/kubernetes.list
echo 'deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.32/deb/ /' | sudo tee /etc/apt/sources.list.d/kubernetes.list

##### Upgrade 시작 #####

# Find the latest 1.32 version in the list.
# It should look like 1.32.x-*, where x is the latest patch.
sudo apt update
sudo apt-cache madison kubeadm
###################################################
###################################################
##### get version to upgrade  e.g. 1.32.0-1.1 #####
###################################################
###################################################

# replace x in 1.32.x-* with the latest patch version
sudo apt-mark unhold kubeadm && \
sudo apt-get update && sudo apt-get install -y kubeadm='1.32.x-*' && \
sudo apt-mark hold kubeadm

kubeadm version
sudo kubeadm upgrade plan


# controlplane 일 때
sudo kubeadm upgrade apply v1.32.x
# worker node일 때 (버전을 쓸 필요 없음)
sudo kubeadm upgrade node


# exit from node
exit

# in local
# replace <node-to-drain> with the name of your node you are draining
# you can drain in advance before you process to upgrade above
kubectl drain <node-to-upgrade> --ignore-daemonsets

# ssh to node upgrade back
ssh <node-to-upgrade>

# replace x in 1.32.x-* with the latest patch version
sudo apt-mark unhold kubelet kubectl && \
sudo apt-get update && sudo apt-get install -y kubelet='1.32.x-*' kubectl='1.32.x-*' && \
sudo apt-mark hold kubelet kubectl

sudo systemctl daemon-reload
sudo systemctl restart kubelet

# exit from node
exit

# replace <node-to-uncordon> with the name of your node
kubectl uncordon <node-to-upgrade>
```
