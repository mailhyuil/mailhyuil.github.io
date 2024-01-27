# linux iptables

> iptables는 리눅스상에서 방화벽을 설정하는 도구

## 문법

```sh
iptables -A INPUT -s [발신지] --sport [발신지 포트] -d [목적지] --dport [목적지 포트] -j [정책]
# 옵션
-s : 발신지 IP
-sport : 발신지 포트
-d : 목적지 IP
-dport : 목적지 포트

-j : 정책 # ACCEPT, DROP, REJECT, LOG, MASQUERADE, DNAT, SNAT

-A : 추가할 룰을 맨 아래의 줄에 추가 # INPUT, OUTPUT, FORWARD
-I : 추가할 룰을 맨 위의 줄에 추가  # INPUT, OUTPUT, FORWARD
-D : 특정 룰을 삭제              # INPUT, OUTPUT, FORWARD

-n : IP를 reverse DNS에 등록된 도메인으로 검색해서 보여주지 않는 옵션 (순수 IP로 보여줌)
-N : 이미 정의된 체인 외적으로, 사용자 정의 체인을 생성
-X : -N 명령어로 추가생성한 체인을 삭제
-E : 체인의 이름을 바꾼다.

# 확인
-L : 입력된 체인 or 전체 체인에 설정된 룰을 출력 # iptables -L
```

## 예시

```sh
# 특정 포트를 허용
iptables -I INPUT -p tcp -s 10.0.0.0 --dport 3000 -j ACCEPT
# 특정 포트를 차단
iptables -I INPUT -p tcp --dport 3000 -j DROP
```
