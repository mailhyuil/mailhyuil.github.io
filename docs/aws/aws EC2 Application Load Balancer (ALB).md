## EC2 Application Load Balancer (ALB)

> Nginx의 로드 밸런싱 기능을 수행하는 AWS 서비스
>
> > Listener를 추가하여 포트를 리스닝 후 트래픽을 Target Group으로 전달
> >
> > > Listener Rules를 통해 특정 Path을 각각 다른 Target Group으로 전달할 수 있다.
> > >
> > > > Availability Zone 설정 가능 (Target Group이 속한 AZ에 서버가 있어야 함)
