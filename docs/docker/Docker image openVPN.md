# Docker image openVPN

## run

> 컨테이너를 실행킬 때 명령을 내리고 바로 종료시키는 방식
>
> > 볼륨에 데이터가 저장되어 있기 때문에 컨테이너를 다시 실행하면 데이터가 유지된다.

```sh
# config 생성
docker run -v $(pwd):/etc/openvpn --rm kylemanna/openvpn ovpn_genconfig -u udp://{HOST_IP}
# init pki : pki란 Public Key Infrastructure의 약자로, 공개키 기반의 인증서 발급 및 관리를 위한 시스템
docker run -v $(pwd):/etc/openvpn --rm -it kylemanna/openvpn ovpn_initpki
# vpn 서버 실행
docker run -v $(pwd):/etc/openvpn --cap-add=NET_ADMIN --restart=always -d -p 1194:1194/udp kylemanna/openvpn
# client 추가
docker run -v $(pwd):/etc/openvpn --rm -it kylemanna/openvpn easyrsa build-client-full {USER_NAME} nopass
# client key 파일 생성
docker run -v $(pwd):/etc/openvpn --rm kylemanna/openvpn ovpn_getclient {USER_NAME} > {USER_NAME}.ovpn

# client 제거 (optional)
docker run -v $(pwd):/etc/openvpn --rm -it kylemanna/openvpn ovpn_revokeclient {USER_NAME} remove
```

## openvpn.conf

```conf
### Route Configurations Below
route 192.168.254.0 255.255.255.0

### Push Configurations Below
#push "block-outside-dns"
#push "dhcp-option DNS 8.8.8.8"
#push "dhcp-option DNS 8.8.4.4"
push "comp-lzo no"
push "route 192.168.1.0 255.255.255.0"
```

## 클라이언트에 ovpn key 파일 복사

> vpn 컨테이너의 `{USER_NAME}.ovpn -> C:\Program Files\OpenVPN\config`
