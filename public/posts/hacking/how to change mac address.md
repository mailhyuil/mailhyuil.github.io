# how to change mac address

> 컴퓨터를 재시작하면 mac address가 초기화된다.

```sh
# ifconfig [interface] down

ifconfig wlan0 down # interface를 비활성화
ifconfig wlan0 hw ether 00:11:22:33:44:55 # mac address 변경
ifconfig wlan0 up # interface를 활성화
```
