# aws IAM policy AdministratorAccess

> 미리 정의된(predefined) AWS 정책 중 하나로, 모든 AWS 서비스 및 리소스에 대한 완전한 액세스 권한을 부여한다.
>
> > 모든게 접근이 가능하기 때문에 다른 policy와 함께 사용할 경우 다른 policy는 무시된다.

## root 계정과 차이점

> 밑의 작업은 오직 root 계정만 할 수 있다.

```txt
AWS 계정 해지
계정의 결제 정보 수정
지원 플랜 변경
계정의 MFA(다단계 인증) 설정 및 삭제
AWS Organizations에서 계정 분리
기타 보안 정보(예: 루트 사용자 암호 변경 등) 수정
```

## AdministratorAccess

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "*",
      "Resource": "*"
    }
  ]
}
```
