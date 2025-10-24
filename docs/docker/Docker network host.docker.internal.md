# Docker network host.docker.internal

> host의 localhost를 사용할 수 있다
>
> > window, mac에서는 기본으로 사용 가능
> >
> > > linux에서는 대신 network_mode: "host: 옵션을 쓸 수 있지만 다른 네트워크에 연결되어 있는 경우 불가능
> > >
> > > 직접 --add-host 옵션으로 추가해주면 사용 가능하다.

## linux에서는 container 실행시 --add-host host.docker.internal:host-gateway 옵션을 달아주면 가능

```yml
version: "3.8"

services:
  nginx:
    image: nginx:alpine
    container_name: nginx
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf
      - ./nginx/conf.d:/etc/nginx/conf.d
      - /etc/letsencrypt:/etc/letsencrypt:ro
      - /home/ubuntu/portfolio:/app
    extra_hosts:
      - "host.docker.internal:host-gateway" # ✅ 이게 핵심!
    networks:
      - public # ✅ 기존 브릿지 네트워크 유지
    restart: unless-stopped

networks:
  public:
    external: true # 기존에 있는 public 네트워크 사용
```
