# kubernetes CNI

> Container Network Interface
>
> > 컨테이너끼리 통신을 할 수 있게 해주는 플러그인을 만들기 위한 표준
> > CNI가 있어야 coreDNS 등이 동작 가능하다.
> > kubelet이 실행시켜준다.
> >
> > > 쿠버네티스 자체 CNI 플러그인 : kubenet
> > > kubenet 기능이 부족하기에 3rd-party 플러그인을 사용한다.
> > > 3rd-party 플러그인 : Flannel, Calico, Weavenet, NSX ...
> > > 3rd-party 플러그인은 다양한 NetworkPolicy, 트래픽 제어 등의 기능을 제공한다.
