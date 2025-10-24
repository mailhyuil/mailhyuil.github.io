# nginx module zip zstd - zstandard

> 구글에서 2013년에 발표된 압축 알고리즘
>
> > 텍스트 압축에 가장 적합하기 때문에 웹 서버 등에서 인터넷 웹 사이트를 더 빠르게 로드하는데에 사용된다.
> > gzip보다 약 20% 더 효율적이다.

## install module

```sh
# 확인
nginx -V 2>&1 | grep zstd


# 없으면 설치
sudo apt update
sudo apt install -y zstd

sudo add-apt-repository -y ppa:hda-me/nginx-stable
sudo apt update
sudo apt install -y nginx
```

## nginx.conf

```conf
# 🔥 Zstd 압축 설정
zstd on;
zstd_static on;
zstd_comp_level 6;
zstd_types text/plain text/css text/javascript application/javascript application/x-javascript application/json application/xml image/svg+xml;
```
