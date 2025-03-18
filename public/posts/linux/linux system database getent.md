# linux system database getent

> 리눅스의 시스템 데이터베이스에는 user, group, host, passwd, services, protocols, networks, netgroup, rpc, ethers, and netmasks가 있다.
>
> > getent 명령어로 시스템 데이터베이스의 entry를 확인할 수 있다.

## system database

```sh
passwd	    사용자 계정 정보	       /etc/passwd
group	    그룹 정보	              /etc/group
shadow	    사용자 비밀번호 해시값	    /etc/shadow
gshadow	    그룹 비밀번호 정보         /etc/gshadow
hosts	    호스트 IP 주소 매핑  	   /etc/hosts
ahosts      호스트 IP 주소 매핑        /etc/hosts.equiv
ahostsv4    IPv4 호스트 IP 주소 매핑   /etc/hosts.equiv
ahostsv6    IPv6 호스트 IP 주소 매핑   /etc/hosts.equiv
initgroups  사용자 그룹 정보           /etc/group
netgroup	네트워크 그룹 정보         /etc/netgroup
rpc	        원격 프로시저 호출 정보     /etc/rpc
services	네트워크 서비스 포트 매핑   /etc/services
protocols	네트워크 프로토콜 정보      /etc/protocols
networks	네트워크 관련 정보         /etc/networks
ethers	    MAC 주소 매핑             /etc/ethers
aliases	    메일 별칭 정보	           /etc/aliases
...
```

## getent

```sh
# getent <database> <key>

getent group www-data
```
