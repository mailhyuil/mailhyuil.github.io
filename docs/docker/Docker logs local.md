# Docker logs local

## /etc/docker/daemon.json

```json
{
  "log-driver": "local",
  "log-opts": {
    "max-size": "10m",
    "max-file": "3"
  }
}
```
