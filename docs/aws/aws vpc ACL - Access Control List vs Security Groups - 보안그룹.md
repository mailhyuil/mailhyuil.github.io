# aws vpc ACL - Access Control List vs Security Groups - 보안그룹

## ACL (Access Control List)

> ACL(Network access control list, 네트워크 엑세스 제어 목록)은 VPC를 위한 하나 이상의 서브넷에서 들어오고 나가는 트래픽을 제어하기 위한 방화벽(firewall) 역할을 하는 추가적인 보안 계층
>
> > ACL은 라우팅 테이블을 지나 서브넷으로 들어가고 나가는(inbound & outbound) 트래픽을 제어한다!
> >
> > > ACL은 보안 그룹보다 더 넓은 범위의 보안을 제공한다.

## 보안 그룹

> 보안그룹은 인스턴스에서 들어가고 나가는(inbound & outbound) 트래픽을 제어한다!
