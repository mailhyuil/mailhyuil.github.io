# nginx 해외 IP 차단

## command

```sh
nginx -V | grep --with-http_geoip_module
# 없으면 설치
sudo apt install libnginx-mod-http-geoip
sudo apt install geoip-database

# /usr/share/GeoIP 경로에 GeoIP.dat 확인
## 없으면 설치
sudo mkdir /usr/share/GeoIP
cd /usr/share/GeoIP
sudo wget https://centminmod.com/centminmodparts/geoip-legacy/GeoIP.dat.gz
sudo gunzip GeoIP.dat.gz
```

## nginx.conf

```conf
http {
    # GeoIP Setting
    geoip_country /usr/share/GeoIP/GeoIP.dat;
    map $geoip_country_code $allowed_country {
    	default no;
        KR yes;
    }
}
```
