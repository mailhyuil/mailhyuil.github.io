# kubernetes CNI (Container Network Interface)

> container networking 구현 방법은 각 시스템 (network namespace, docker, kubernetes, rkt, mesos 등) 마다 다르다.
>
> 하지만 구현 방법은 대체적으로 비슷하다.
>
> 따라서 하나의 프로그램(plugin)을 만들어 이 과정을 자동화하고자 한다.
>
> 이 프로그램이 어떻게 개발되어야 하는지 정의된 것이 CNI (Container Network Interface) 이다.
>
> > CNI가 있어야 coreDNS 등이 동작 가능하다.
> >
> > kubelet이 실행시켜준다.
> >
> > > 쿠버네티스 자체 CNI 플러그인 : kubenet
> > >
> > > kubenet 기능이 부족하기에 3rd-party 플러그인을 사용한다.
> > >
> > > 3rd-party 플러그인 : Flannel, Calico, Weavenet, NSX ...
> > >
> > > 3rd-party 플러그인은 다양한 NetworkPolicy, 트래픽 제어 등의 기능을 제공한다.
