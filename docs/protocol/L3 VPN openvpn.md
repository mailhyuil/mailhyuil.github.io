# L3 VPN openvpn

> 오픈소스 VPN 서버
>
> > 포트 : 1194

## openvpn 설치 스트립트

```sh
# 설치 스크립트 다운로드
wget https://git.io/vpn -O openvpn-install.sh
# 실행 권한 부여
chmod +x openvpn-install.sh
# 실행
openvpn-install.sh
# vpn access key가 생성됨
```

## scenario

```txt
1. 서버에 openvpn 설치
2. vpn access key 생성
3. 내 컴퓨터에 openvpn client 설치
4. 서버에서 발급한 .ovpn 설정 파일과 키 설정
5. 접속 (보안 터널링 및 VPN 통신)
```
