# docker daemon

> etc/docker/daemon.json 으로 설정

```sh
{
  "log-driver": "json-file",
  "log-opts":{
    "max-size":"10m",
    "max-file":"10"
  }
}
```
