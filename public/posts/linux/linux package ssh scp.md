## scp

> directory를 바로 옮김 폴더 생성 안해도 됨
>
> > nginx scp 시 권한이 있는 디렉토리에 복사해라 (e.g. /home/ubuntu)

## install

```sh
# remote-server
apt install openssh-server -y

# client
apt install openssh-client -y
```

## usage

```sh
scp [옵션] [파일명] [remote_user]@[remote_ip]:[저장할 위치]
# scp testfile2 root@192.168.159.129:/tmp/testclient
# scp -i ./scripts/test.pem -r .output ${{ env.SSH_USER }}@${{ env.SSH_HOST }}:${{ env.DEPLOY_PATH }}

# 여러 파일을 포함하고 있는 "디렉터리"를 원격지로 보낼 때 -r (recursive) 옵션
```
