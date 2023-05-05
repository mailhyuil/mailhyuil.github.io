## EC2

1. 서비스 -> EC2
2. 인스턴스 시작하기 (ubuntu)
3. .ppk key 생성 인스턴스에 연결 # puttyGen 다운로드 .pem키를 .ppk로 변환
4. window는 putty를 사용해서 ssh 연결
5. username은 ubuntu

## 순서

1. VPC 생성
2. SUBNET 생성
3. 보안그룹 생성
4. EC2 인스턴스 생성
5. ec2에 탄력적 ip 할당

## 사용자 데이터

> 인스턴스 생성 시 실행시킬 커맨드
>
> > 생성 시 설치할 소프트웨어 넣어주기

```
#!/bin/bash
sudo yum update -y
sudo amazon-linux-extras install nginx1 -y
sudo systemctl enable nginx
sudo systemctl start nginx
```

## docker 설치하기

1. sudo apt update && sudo apt install docker.io
2. docker 그룹에 유저 포함시키기

```bash
sudo groupadd docker # docker 그룹이 없을 시 생성
sudo usermod -aG docker $USER
newgrp docker
```

- pscp로 EC2 서버에 파일 업로드

```bash
# pscp.exe 다운로드
# pscp -i ppk_path file_path username@ip:path
./pscp.exe -i ./hyuil.ppk ./ROOT.war ubuntu@3.34.191.96:/home/ubuntu/ROOT.war
```

## 포트 열어주기

> EC2 -> 보안그룹 -> 인바운드 규칙 포트 추가 (1. HTTP 모든 접근 허용하기, 2. 원하는 포트 열기)

## swap 메모리 (EC2가 멈출 때)

> 저렴한 EC2를 사용할 경우 메모리 부족으로 서버가 멈춘다

```bash
# swap 메모리 확인
free -m
# 루트 파일 시스템에 스왑 파일을 생성
sudo dd if=/dev/zero of=/swapfile bs=128M count=32
# 스왑 파일의 읽기 및 쓰기 권한을 업데이트
sudo chmod 600 /swapfile
# 스왑 영역을 설정
sudo mkswap /swapfile
# 스왑 공간에 스왑 파일을 추가하여 스왑 파일을 즉시 사용할 수 있도록 한다
sudo swapon /swapfile

# /etc/fstab 파일 마지막에 추가
# /swapfile swap swap defaults 0 0
sudo nano /etc/fstab
```
