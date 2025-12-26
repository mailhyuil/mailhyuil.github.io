# security base how to change mode

> mode는 관리 모드와 모니터 모드로 나뉜다.
>
> > 기본은 관리 모드로 되어있으면 이 경우 내 컴퓨터로 들어오는 패킷만 볼 수 있다.
> >
> > > 모니터 모드로 변경하면 주변에 있는 모든 패킷을 볼 수 있다.
> > >
> > > > adapter가 모니터 모드를 지원해야 한다.

```sh
iwconfig # 현재 wireless interface의 상태를 확인

ifconfig wlan0 down # interface를 비활성화
airmon-ng check kill # 네트워크 관련 프로세스를 모두 종료
iwconfig wlan0 mode monitor # 모니터 모드로 변경
ifconfig wlan0 up # interface를 활성화
```
