# Packet Sniffing airodump-ng

> 주변에 있는 무선 네트워크의 정보를 보여주는 프로그램이다.
>
> > monitor mode일 때만 사용할 수 있다.

```sh
airodump-ng wlan0 # 2.4GHz 감지
airodump-ng --band a wlan0 # 5GHz 감지 (어댑터가 5GHz를 지원해야 함)
airodump-ng --band abg wlan0 # 5GHz & 2.4GHz 감지
airodump-ng --bssid 08:5D:DD:13:04:20 --channel 10 --write test wlan0 # 패킷 캡쳐해서 file로 저장

BSSID # target MAC address
PWR # 신호 강도 (숫자가 클수록 강한 신호)
Beacons # 네트워크 존재를 알리는 패킷 수
#Data
#/s $ Data 패킷 수
CH # 네트워크가 사용하는 채널
MB # 최대 전송 속도
ENC # 암호화 방식
CIPHER # 네트워크 내에서 사용하는 암호화 방식
AUTH # 인증 방식
ESSID # 네트워크 이름
```
