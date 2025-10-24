# docker-compose yaml openvpn

## docker-compose.yml

```yaml
version: "3.8"
services:
  openvpn:
    container_name: openvpn
    image: wheelybird/openvpn-ldap-opt:v1.4
    environment:
      OVPN_SERVER_CN: "vpn.example.com"
      OVPN_NETWORK: "172.16.0.0 255.255.255.0"
      OVPN_ROUTES: "172.16.0.0 255.255.255.0, 10.10.0.0 255.255.0.0"
      OVPN_DNS_SERVERS: "10.10.0.2"
      OVPN_NAT: "true"
      OVPN_REGISTER_DNS: "false"
      OVPN_ENABLE_COMPRESSION: "false"
      USE_CLIENT_CERTIFICATE: "true"
    cap_add:
      - NET_ADMIN
    volumes:
      - openvpn-data:/etc/openvpn
    ports:
      - "1194:1194/udp"
    networks:
      - openvpn
    logging:
      driver: "json-file"
      options:
        max-size: "8m"
        max-file: "10"
    restart: unless-stopped
networks:
  openvpn: {}
volumes:
  openvpn-data: {}
```
