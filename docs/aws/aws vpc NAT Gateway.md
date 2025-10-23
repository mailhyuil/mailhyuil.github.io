# aws NAT Gateway

> 인터넷 게이트웨이는 양방향이다.
>
> > 하지만 프라이빗 서브넷은 단방향 아웃바운드만 허용해야한다.
> >
> > > 단방향 아웃바운드만 허용해서 인터넷에서 필요한 소스만 가져오고 외부에서는 접근 못하도록

## 설정

> 서브넷(중요) -> 사용하고자 하는 VPC의 Public Subnet
>
> > 탄력적 IP 주소 연결
> >
> > > 하나 이상의 프라이빗 서브넷과 연결된 라우팅 테이블을 업데이트하여 인터넷 바운드 트래픽이 NAT 게이트웨이를 가리키도록 해야한다

```
1. public subnet, private subnet 생성
2. public route, private route 생성 // private route에는 private subnets 연결, public에는 public subnets
3. 인터넷 gateway 생성 public subnet 붙여주기
4. nat gateway 생성 public subnet 붙여주기 (탄력적 ip 할당! public ec2와 별개의 탄력적 ip이다.)
5. public route에 인터넷 게이트웨이와 public subnet, private route에 nat 게이트웨이와 private subnet 붙이기
6. public 보안그룹, private 보안그룹 생성 // private 보안그룹의 인바운드 ssh는 public 보안그룹을 바라보게 한다.
7. public ec2 생성 pem키 업로드
8. private ec2생성 이제 publice ec2에서 public ec2로 ssh로 접근 가능
```
