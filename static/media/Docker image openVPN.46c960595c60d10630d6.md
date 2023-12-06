# Docker image openVPN

## run

```sh
OVPN_DATA="/home/ec2-user/openvpn-data"

docker run --name vpn --rm -v $OVPN_DATA:/etc/openvpn kylemanna/openvpn ovpn_genconfig -u udp://{HOST_IP}
```
