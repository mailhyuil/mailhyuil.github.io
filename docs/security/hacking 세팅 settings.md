# security 세팅 settings

```sh
# mac address 변경
ifconfig wlan0 down # interface를 비활성화
ifconfig wlan0 hw ether 00:11:22:33:44:55 # mac address 변경
ifconfig wlan0 up # interface를 활성화

# mode 변경
ifconfig wlan0 down # interface를 비활성화
airmon-ng check kill # 네트워크 관련 프로세스를 모두 종료
iwconfig wlan0 mode monitor # 모니터 모드로 변경
ifconfig wlan0 up # interface를 활성화
```
