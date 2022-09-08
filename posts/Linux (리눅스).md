# Linux (리눅스)

## 명령어

### 관리자 명령어
```
sudo // superuser do
su // switch user
```
> $ : 일반유저  # : 루트계정

### 기본 명령어
```
cd
ls
whatis
mkdir/rmdir
pwd
cp
clear
mv
rm
touch
locate
find
file
cat
man

head
tail
more
less
grep
wc
sort
cut
split
diff
sed
awk

echo
```

### 유저관리
```
usermod
userdel
passwd
useradd

chown
```

### 압축
```
tar
```

### url을 통한 다운로드
```
curl
wget
yum
ddkg
```

### 링크파일
```
ln
```

### 권한관리
```
chmod
```

### apt
```
apt-get update
apt-cache search
apt remove
apt purge
```

### ssh
> 22 port
```
sudo apt-get install openssh-server //설치
sudo /etc/init.d/ssh restart //재시작
sudo apt-get remove openssh-server //제거
```
> putty를 통해 접속

### ftp
> 21 port
```
sudo apt-get install vsftpd //설치
ftp 호스트주소
```
> ssh로도 할 수 있다
```
sftp -p port hostname@ip
```
- nslookup ip조회

### usb 마운트
> /media에 마운트
```
sudo mount path /media/
```
