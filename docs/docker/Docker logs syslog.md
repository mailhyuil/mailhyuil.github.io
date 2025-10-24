# Docker logs syslog

```sh
docker run --name nginx -d --log-driver=syslog --log-opt tag="my-nginx" nginx
```

## log 확인

```sh
방법 1. docker logs nginx

방법 2. journalctl -u docker.service | grep -i my-nginx

방법 3. cat /var/log/syslog | grep -i my-nginx

# ...
# Feb 20 14:36:56 server1 my-nginx[1090269]: 2025/02/20 14:36:56 [notice] 1#1: start worker processes
# ...
```
