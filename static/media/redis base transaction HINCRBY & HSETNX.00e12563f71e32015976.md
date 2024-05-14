# redis base transaction HINCRBY & HSETNX

> read 후 write를 하면 read와 write 사이에 다른 write가 발생할 수 있다.
>
> > HINCRBY, HSETNX같은 명령어로 이를 방지할 수 있다.
> >
> > > HINCRBY나 HSETNX는 read 없이 바로 write를 하기 때문에 다른 write가 발생하지 않는다.

```sh
# HINCRBY
# HSETNX
```
