# linux network DNS resolv conf

> 사용하고자 하는 네임서버를 지정하는 파일
>
> > /etc/resolv.conf
> >
> > > 서버가 늘어날 수록 각 서버의 /etc/host 파일에 domain을 추가하기 번거러워진다.
> > >
> > > > /etc/host를 하나의 서버에 두고 /etc/resolv.conf에 네임서버를 추가하여 사용한다.

## /etc/resolv.conf

```sh
nameserver 168.126.63.1
nameserver 168.126.63.2

# search를 사용할 경우 web으로 접근 시 web, web.mycompany.com을 전부 검색한다.
search mycompany.com prod.mycompany.com

# google dns를 추가하고 싶다면
nameserver 8.8.8.8
```

## /etc/hosts (in nameserver)

```sh
192.168.1.10 web
192.168.1.11 db
192.168.1.12 nfs

# google dns를 추가하고 싶다면
Forward All to 8.8.8.8
```
