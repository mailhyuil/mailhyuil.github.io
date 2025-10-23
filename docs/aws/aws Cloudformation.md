# aws Cloudformation

> 인프라를 선언적으로 정의할 수 있는 서비스
>
> > aws-cdk와 함께 사용하여 프로그래밍으로 인프라를 선언적 정의할 수 있음

## template.yml

```yml
AWSTemplateFormatVersion: "2010-09-09"
Description: 템플릿 설명

Parameters:
  # 입력 파라미터 정의

Resources:
  # AWS 리소스 정의 (필수!)

Outputs:
  # 출력 값 정의
  # 스택 생성 후 반환할 값
  # e.g. EC2 퍼블릭 IP
```

## 내장함수

```txt
# 참조
!Ref MyParameter

# 속성 가져오기
!GetAtt MyResource.Arn

# 문자열 결합
!Sub 'my-bucket-${EnvironmentType}'

# 조인
!Join ['-', [my, bucket, name]]

# 조건문
!If [IsProduction, t3.large, t3.micro]
```
