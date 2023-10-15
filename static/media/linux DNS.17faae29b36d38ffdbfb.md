# linux DNS

> 레드헷/우분투 계열에서는 /etc/hosts 파일을 우선적으로 참고하여 네임서버를 아이피주소로 바꿉니다.
>
> > localhost가 127.0.0.1로 바뀌는 이유도 이 때문입니다.

## 변경하기

> /etc/hosts 파일을 수정합니다.
>
> > network 데몬을 재시작합니다.

```sh
sudo /etc/init.d/networking restart
```
