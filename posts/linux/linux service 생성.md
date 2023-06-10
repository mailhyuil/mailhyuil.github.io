# linux service 생성

> /etc/systemd/system/\*.service 파일 생성

```sh
[Unit]
Description=Jupyter Notebook Server

[Service]
ExecStart=/usr/local/bin/jupyter-notebook
WorkingDirectory=/your/working/dir

[Install]
WantedBy=multi-user.target
```
