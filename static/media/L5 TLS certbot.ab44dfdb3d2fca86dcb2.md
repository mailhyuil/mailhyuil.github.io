# certbot (letsencrypt)

> TLS 키 + 인증서를 발급해주는 서비스

## install

```sh
sudo apt-get update
sudo apt-get install certbot
```

## 인증서 발급

> 인증서 발급 시점에는 DNS의 A Record 설정이 내가 사용하는 서버 ip로 되어있어야 함
>
> > 인증서가 발급되면 /etc/letsencrypt/live 폴더가 생성되고 안에 인증서가 생성됨
> >
> > > 최초 발급 시에는 http:80 포트로 웹에 접근 가능해야함
> > >
> > > 인증서를 받고 난후 https:443 설정으로 바꿔라

```sh
sudo certbot certonly --standalone -d <example.com> -d <www.example.com>
```

## nginx

> options-ssl-nginx.conf는 단순한 설정파일 없으면 다운로드 받아서 사용해도됨

```conf
server {
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name historytour.co.kr www.historytour.co.kr;
    ssl_certificate /etc/letsencrypt/live/historytour.co.kr/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/historytour.co.kr/privkey.pem;
    ssl_trusted_certificate /etc/letsencrypt/live/historytour.co.kr/chain.pem;

    include /etc/letsencrypt/options-ssl-nginx.conf;

    location / {
        root /usr/share/nginx/html/client;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```
