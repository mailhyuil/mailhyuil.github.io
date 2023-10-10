# kubernetes service

> 같은 성격의 pod들을 묶어서 외부에 노출 시킬 수 있는 단일 엔드포인트(Virtual IP)를 생성
>
> > 로드밸런서 역할 (pod의 부하 분산)
> >
> > > 내부 IP 통신 타입 : ClusterIP
> > > 외부 IP 통신 타입 : NodePort, LoadBalancer
> > >
> > > > pod 간의 통신을 하기 위한게 아니다!! (그건 CNI의 역할)
