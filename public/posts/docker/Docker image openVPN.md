# Docker image openVPN

## run

```sh
OVPN_DATA="/home/ec2-user/openvpn-data"
# openvpn 실행
docker run --name vpn -v $OVPN_DATA:/etc/openvpn -d -p 1194:1194/udp --restart=always --cap-add=NET_ADMIN kylemanna/openvpn
# openvpn-data 폴더 생성
docker exec vpn ovpn_genconfig -u udp://{HOST_IP}
# openVPN CA와 ServerKey 생성
docker exec vpn ovpn_initpki
# client 생성
docker exec vpn easyrsa build-client-full {USER_NAME} nopass
# client ovpn파일 생성
docker exec vpn ovpn_getclient {USER_NAME} > {USER_NAME}.ovpn
# openvpn.conf 파일 오픈
docker exec vpn vi /etc/openvpn/openvpn.conf


# client 제거
docker exec vpn ovpn_revokeclient {USER_NAME} remove
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
push "route {VPC_IP} {VPC_SUBNETMASK}"
```

## ovpn 파일 클라이언트에 적용

> vpn 컨테이너의 {USER_NAME}.ovpn -> C:\Program Files\OpenVPN\config
