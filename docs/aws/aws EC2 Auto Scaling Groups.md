# aws EC2 Auto Scaling Groups

> launch template : AMI(amazon machine image) 모든 설정이 완료된 이미지로 인스턴스를 즉시 생성할 수 있는 템플릿
>
> > AMI를 golden image라고 한다.

## ami

1. ec2 인스턴스 > 작업 > 이미지 생성
2. 재부팅 안 함 체크!
3. 이미지 생성

## launch template

1. 인스턴스 > 시작 템플릿
2. os 이미지 > 내 ami > 내가 생성한 ami 선택
3. 인스턴스 유형, 키페어, 서브넷, 보안그룹 선택
4. ... cpu 사용률에 따라서 scale-out scale-in 하게 설정
5. auto scaling group 생성 -> ec2가 띄어진다.
