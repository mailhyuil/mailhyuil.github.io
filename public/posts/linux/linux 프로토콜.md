# ssh

> 22 port

```sh
sudo apt-get install openssh-server //설치
sudo /etc/init.d/ssh restart //재시작
sudo apt-get remove openssh-server //제거
```

> putty를 통해 접속

# ftp

> 21 port

```
sudo apt-get install vsftpd //설치
ftp 호스트주소
```

> ssh로도 할 수 있다

```
sftp -p port hostname@ip
```
