# scp vs sftp

![](/img/scpsftp.png)

## scp

> directory를 바로 옮김 폴더 생성 안해도 됨

```sh
# 업로드
scp -i ./key.pem -r ./dir user@remote:/apps
# 다운로드
scp -i ./key.pem -r user@remote:/apps ./
```

## sftp

```sh
sftp remote_username@server_ip_or_hostname

get filename.zip [다른이름.zip]
put filename.zip
```
