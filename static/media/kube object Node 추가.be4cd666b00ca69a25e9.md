# kube object Nodes 추가

## 추가할 node에 Docker, kubeadm, kubelet 설치

```sh
# Docker
apt-get update && apt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
apt-get update && sudo apt-get install docker-ce=5:19.03.1~3-0~ubuntu-bionic docker-ce-cli containerd.io

# kubeadm & kubelet
apt-get update && apt-get install -y apt-transport-https curl
curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add -
echo deb http://apt.kubernetes.io/ kubernetes-xenial main > /etc/apt/sources.list.d/kubernetes.list
apt-get update && apt-get install -y kubeadm=1.15.3-00 kubelet=1.15.3-00
```

## masterNode 접속

> ssh

## kubeadm 토큰 생성

```sh
kubeadm token create
# token: 4n1agp.j97evoelu2k35dre
```

## CA 인증서 Hash 값 얻기

```sh
openssl x509 -pubkey -in /etc/kubernetes/pki/ca.crt | openssl rsa -pubin -outform der 2>/dev/null | openssl dgst -sha256 -hex | sed 's/^.* //'
# hash: 060896fc4bfe949304b8c1af7b23bb5c4e60e6d242722ce5bd02fe4cbc94aabe
```

## 노드 추가

```sh
kubeadm join <ip> --token <token> --discovery-token-ca-cert-hash sha256:<hash>
```
