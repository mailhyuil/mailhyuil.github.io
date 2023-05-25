# scp vs sftp

![](/img/scpsftp.png)

## scp

```sh
scp [옵션] [파일명] [remote_user]@[remote_ip]:[저장할 위치]
# scp testfile2 root@192.168.159.129:/tmp/testclient
# scp -i ./scripts/test.pem -r .output ${{ env.SSH_USER }}@${{ env.SSH_HOST }}:${{ env.DEPLOY_PATH }}

# 여러 파일을 포함하고 있는 "디렉터리"를 원격지로 보낼 때 -r (recursive) 옵션


```

## sftp

```
sftp remote_username@server_ip_or_hostname

get filename.zip [다른이름.zip]
put filename.zip
```
