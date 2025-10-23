# docker ubuntu

## run

```bash
docker run --name ubuntu -p 22:22 -itd --restart unless-stopped --privileged ubuntu:20.04
```

## 서버 접속

```bash
docker attach ubuntu
```

## ssh로 접속

### ubuntu

```sh
apt install openssh-server
sudo /etc/init.d/ssh start
```

### local

```sh
ssh root@localhost
```
