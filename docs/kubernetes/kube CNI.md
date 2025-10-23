# kubernetes CNI (Container Network Interface)

> container networking 구현 방법은 각 시스템 (network namespace, docker, kubernetes, rkt, mesos 등) 마다 다르다.
>
> 하지만 구현 방법은 대체적으로 비슷하다.
>
> 따라서 하나의 프로그램(plugin)을 만들어 이 과정을 자동화하고자 한다.
>
> 이 프로그램이 어떻게 개발되어야 하는지 정의된 것이 CNI (Container Network Interface) 이다.
>
> > cni plugin이 실행되면 daemonset이 실행되며 각 노드를 담당하는 에이전트 pod가 실행된다.

## 설치된 cni plugin의 바이너리 파일 (--cni-bin-dir)

> /opt/cni/bin/ cni plugin이 사용하는 바이너리가 저장된 경로

## 현재 설치된 cni plugin 확인 (--cni-conf-dir)

> /etc/cni/net.d/ 에 설치된 cni plugin의 설정 파일을 확인하여 현재 설치된 cni plugin을 확인할 수 있다.
