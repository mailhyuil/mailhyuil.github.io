# kube base docker & crictl & nerdctl & ctr

## docker

> 초기 쿠버네티스에서 사용한 컨테이너 런타임
>
> > 후에 CRI(Container Runtime Interface)를 통해 다양한 컨테이너 런타임을 사용할 수 있게 됨
> >
> > > 하지만 도커는 CRI 이전에 나왔기 때문에 dockershim을 통해 도커를 사용할 수 있음

## ctr

> containerd를 디버깅하기 위한 CLI (containerd에 내장된 CLI)
>
> > 사용자 친화적이지 않음
> >
> > > 디버깅 용도

## crictl

> 쿠버네티스 커뮤니티에서 개발한 containerd를 위한 CLI
>
> > 디버깅 용도

## nerdctl

> 도커가 제공하는 기능을 전부 지원하는 CLI
>
> > 추가적인 기능을 제공함
> >
> > > 도커와 같은 범용적인 용도
