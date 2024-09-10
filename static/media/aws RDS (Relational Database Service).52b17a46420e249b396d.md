# RDS (Relational Database Service)

> PaaS (Platform as a Service) 서비스 (e.g. RDS for Postgres)

1. RDS에서 데이터 베이스 생성

   > 로컬에서 테스트하려면 퍼블릭 액세스 허용(모든 곳에서 접근 가능)

2. 보안 그룹 & 서브넷

   > 연동할 EC2 인스턴스의 VPC와 같은 VPC 사용
   >
   > > RDS 보안 그룹에서 EC2 인스턴스 보안그룹 소스를 허용
   > >
   > > > EC2 서브넷 전부 포함

3. 엔드포인트/3306 으로 접속 (mysql)

```
mysql -u 'root' --host "campdb.c6gozi1vwykq.ap-northeast-2.rds.amazonaws.com" -P "3306" -p
```
