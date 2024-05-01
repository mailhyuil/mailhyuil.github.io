# docker run options --privileged

> 도커 컨테이너는 기본으로 unprivileged 모드로 실행된다.
>
> > unprivileged 모드에서는 컨테이너 내부에서 특정 시스템 리소스에 접근할 수 없다.
> >
> > > privileged 모드로 실행하면 컨테이너는 호스트의 커널을 사용할 수 있게 된다. (e.g. network interface 변경)
> > >
> > > (root보다는 권한이 낮지만, 특정 시스템 리소스에 접근할 수 있게 된다.)

```sh
docker run --privileged -d -p 80:80 nginx
```
