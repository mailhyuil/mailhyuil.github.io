# linux network iptables

> 방화벽, 패킷 필터링, NAT, 포트 포워딩, 패킷 로깅 등을 설정할 수 있는 리눅스의 패키지
>
> > iptable은 리눅스 커널에서 네트워크 패킷을 필터링하고 NAT(Network Address Translation)를 수행하는 데 사용되는 리눅스 커널 모듈이다.
> >
> > > 방화벽과 포트포워딩, 로드밸런싱 역할을 수행할 수 있다.
> > >
> > > > ingress, egress, port forwarding, NAT, packet filtering, packet logging, etc.

## install

```sh
apt install iptables -y
```

## 문법

```sh
iptables -A INPUT -s [발신지] --sport [발신지 포트] -d [목적지] --dport [목적지 포트] -j [정책]
# 옵션
-s : 발신지 IP
-sport : 발신지 포트
-d : 목적지 IP
-dport : 목적지 포트

-j : 정책 # ACCEPT, DROP, REJECT, LOG, MASQUERADE, DNAT, SNAT

-A : iptables 룰 파일에서 추가할 룰을 맨 아래의 줄에 추가 # INPUT, OUTPUT, FORWARD
-I : iptables 룰 파일에서 추가할 룰을 맨 위의 줄에 추가  # INPUT, OUTPUT, FORWARD
-D : iptables 룰 파일에서 특정 룰을 삭제              # INPUT, OUTPUT, FORWARD

-n : IP를 reverse DNS에 등록된 도메인으로 검색해서 보여주지 않는 옵션 (순수 IP로 보여줌)
-N : 이미 정의된 체인 외적으로, 사용자 정의 체인을 생성
-X : -N 명령어로 추가생성한 체인을 삭제
-E : 체인의 이름을 바꾼다.

# 확인
-L : 입력된 체인 or 전체 체인에 설정된 룰을 출력 # iptables -L
```

## 예시

```sh
# 특정 포트
iptables -A INPUT -p tcp --dport <포트번호> -j ACCEPT
# 특정 포트 차단
iptables -A INPUT -p tcp --dport <포트번호> -j DROP
# 특정 IP 허용
iptables -A INPUT -s <특정IP> -j ACCEPT
# 특정 IP 차단
iptables -A INPUT -s <특정IP> -j DROP
# 특정 IP 대역 허용
iptables -A INPUT -s <시작IP>-<끝IP> -j ACCEPT
# 특정 IP 대역 차단
iptables -A INPUT -s <시작IP>-<끝IP> -j DROP

# 저장
service iptables save
service iptables restart
```
