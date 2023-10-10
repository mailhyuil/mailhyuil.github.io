# kubernetes upgrade

> kubernetes 패키지 업그레이드
>
> > kubelet : Pod와 Container 시작과 같은 작업을 수행하는 컴포넌트
> >
> > > kubectl : 클러스터와 통신하기 위한 커맨드 라인 유틸리티
> > >
> > > > kubeadm : 클러스터를 부트스트랩하는 명령

## 순서

1. Control Plane에 ssh 접속
2. kubeadm 업그레이드 (apt)
3. 노드 드레인
   > console이나 master에서 실행
4. kubelet과 kubectl 업그레이드
5. 노드 uncordon
