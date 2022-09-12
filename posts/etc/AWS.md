# AWS

## EC2 인스턴스 만들기
1. 서비스 -> EC2
2. 인스턴스 시작하기 (ubuntu)
3. window는 putty를 사용해서 ssh 연결
4. username은 ubuntu

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
./pscp.exe -i ./hyuil.ppk ./ROOT.war ubuntu@3.38.165.109:/home/ubuntu/ROOT.war
```

## 포트 열어주기
> EC2 -> 보안그룹 -> 인바운드 규칙 포트 추가