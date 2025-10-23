# Docker 설치

```sh
yum install -y yum-utils
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
yum install docker-ce docker-ce-cli containerd.io -y
# containerd.io // docker container를 관리하는 daemon // 이것만 설치해도 docker는 사용가능
# docker-ce // docker daemon
# docker-ce-cli // docker client


systemctl enable --now docker

usermod -aG docker $USER
```
