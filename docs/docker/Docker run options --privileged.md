# Docker run options --privileged

> privileged란 권한이 있는 사용자/그룹 (root in host(linux), postgres in postgres, etc.)을 의미한다.
>
> unprivileged란 권한이 없는 사용자/그룹을 의미한다.
>
> > 도커 컨테이너는 기본으로 host에 대한 unprivileged 모드로 실행된다.
> >
> > > 따라서 unprivileged 모드에서는 컨테이너 내부에서 특정 시스템 리소스에 접근할 수 없다.
> > >
> > > > privileged 모드로 실행하면 컨테이너는 호스트의 커널을 사용할 수 있게 된다. (e.g. network interface 변경)
> > > >
> > > > (root보다는 권한이 낮지만, 특정 시스템 리소스에 접근할 수 있게 된다.)

```sh
docker run --privileged -d -p 80:80 nginx
```
