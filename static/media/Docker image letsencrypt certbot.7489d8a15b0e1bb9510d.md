# Docker image letsencrypt certbot

## run

```sh
docker run --name certbot -it --rm -v $PWD/certbot:/etc/letsencrypt certbot/certbot certonly --standalone -d <example.com> -d <www.example.com>
```
