# linux DNS

> 레드헷/우분투 계열에서는 /etc/hosts 파일을 우선적으로 참고하여 네임서버를 아이피주소로 바꿉니다.
>
> > localhost를 127.0.0.1로 바꿔주고, host.docker.internal을 로컬 아이피로 바꿔주는 역할을 합니다.

## 변경하기

> /etc/hosts 파일을 수정합니다.
> window : C:\Windows\System32\drivers\etc\hosts
>
> > network 데몬을 재시작합니다.

```sh
sudo /etc/init.d/networking restart
```
