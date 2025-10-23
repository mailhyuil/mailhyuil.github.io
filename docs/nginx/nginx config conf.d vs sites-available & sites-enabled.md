# nginx conf.d vs sites-available, sites-enabled

## conf.d

> 권장
>
> > 파일 이름으로 사용할 conf를 지정
> >
> > > 사용할 파일 이름만 .conf로 해주면 된다.

```sh
# /etc/nginx/nginx.conf
http {
    …
    include /etc/nginx/conf.d/*.conf;
}

# enable
/etc/nginx/conf.d/default.conf
# disable
sudo mv -i /etc/nginx/conf.d/default.conf.disable # 이름만 바꿔주기
```

## sites-available & sites-enabled

> debian에서 사용하던 올드한 방식 (deprecated)
>
> > link를 걸어서 사용할 conf를 sites-enabled 폴더로 복사
> >
> > > link를 걸면서 버그가 발생할 가능성이 생겨버린다. (e.g. 하드링크로 걸어서 삭제시 원본이 삭제되어버림)

```sh
sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
```
