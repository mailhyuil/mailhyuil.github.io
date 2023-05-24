# ubuntu docker

## docker 그룹에 유저 포함시키기

```bash
sudo groupadd docker # docker 그룹이 없을 시 생성
sudo usermod -aG docker $USER
newgrp docker
```

## docker 설치

```sh
sudo apt update && sudo apt install docker.io && sudo docker login --username 아이디
```
