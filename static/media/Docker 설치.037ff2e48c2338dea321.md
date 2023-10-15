# Docker 설치

```sh
yum install -y yum-utils
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
yum install docker-ce docker-ce-cli containerd.io -y

systemctl enable --now docker

usermod -aG docker $USER
```
