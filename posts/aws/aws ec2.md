## EC2

> aws의 가상 서버
>
> > ECS(EC2), EKS, RDS, ElastiCache등 다양한 서비스는 내부적으로 EC2를 사용한다.

1. 서비스 -> EC2
2. 인스턴스 시작하기 (ubuntu)
3. .ppk key 생성 인스턴스에 연결 # puttyGen 다운로드 .pem키를 .ppk로 변환
4. window는 putty를 사용해서 ssh 연결
5. username은 ubuntu

## 순서

> vpc 생성 -> 서브넷 생성 -> 인터넷 게이트웨이 생성 및 서브넷에 연결 -> 라우팅 테이블에 서브넷 연결 및 라우팅 인터넷 게이트웨이 -> ec2 연결

## usage자 데이터

> 인스턴스 생성 시 실행시킬 커맨드
>
> > 생성 시 설치할 소프트웨어 넣어주기

```sh
#!/bin/bash
sudo yum update -y
sudo amazon-linux-extras install nginx1 -y
sudo systemctl enable nginx
sudo systemctl start nginx
```

## pscp로 EC2 서버에 파일 업로드

```bash
# pscp.exe 다운로드
# pscp -i ppk_path file_path username@ip:path
./pscp.exe -i ./hyuil.ppk ./ROOT.war ubuntu@3.34.191.96:/home/ubuntu/ROOT.war
```

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

## ec2metadata 명령어

> metadata를 출력 (e.g. ip)
