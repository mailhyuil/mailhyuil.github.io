# Docker image openVPN

## run

```sh
OVPN_DATA="/home/ec2-user/openvpn-data"
# 컨테이너를 실행킬 때 명령을 내리고 바로 종료시키는 방식
# 볼륨에 데이터가 저장되어 있기 때문에 컨테이너를 다시 실행하면 데이터가 유지된다.
docker run -v $OVPN_DATA:/etc/openvpn --rm kylemanna/openvpn ovpn_genconfig -u udp://{HOST_IP}
sudo docker run -v $OVPN_DATA:/etc/openvpn --rm -it kylemanna/openvpn ovpn_initpki
docker run -v $OVPN_DATA:/etc/openvpn -d -p 1194:1194/udp --restart=always --cap-add=NET_ADMIN kylemanna/openvpn
docker run -v $OVPN_DATA:/etc/openvpn --rm -it kylemanna/openvpn easyrsa build-client-full {USER_NAME} nopass
docker run -v $OVPN_DATA:/etc/openvpn --rm kylemanna/openvpn ovpn_getclient {USER_NAME} > {USER_NAME}.ovpn
docker run -v $OVPN_DATA:/etc/openvpn --rm -it kylemanna/openvpn vi /etc/openvpn/openvpn.conf
# client 제거
docker run --rm -it -v $OVPN_DATA:/etc/openvpn kylemanna/openvpn ovpn_revokeclient {USER_NAME} remove
```

## openvpn.conf

```conf
...
### Route Configurations Below
route 192.168.254.0 255.255.255.0

### Push Configurations Below
#push "block-outside-dns"
#push "dhcp-option DNS 8.8.8.8"
#push "dhcp-option DNS 8.8.4.4"
push "comp-lzo no"
push "route 192.168.1.0 255.255.255.0"
```

## ovpn 파일 클라이언트에 적용

> vpn 컨테이너의 {USER_NAME}.ovpn -> C:\Program Files\OpenVPN\config
