# linux find and remove

> 찾은 파일의 이름이 rm {}의 {}에 들어간다.
>
> > \; 는 세미콜론 escape

```sh
# type = file, name = .certbot.lock, execute rm {}
find / -type f -name ".certbot.lock" -exec rm {} \;
```
