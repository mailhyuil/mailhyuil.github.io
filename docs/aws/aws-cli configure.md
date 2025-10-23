# aws-cli configure

> 보안 자격 증명(Security credentials) 페이지에서 키 생성

## 설정

> ~/.aws/credentials, ~/.aws/config 파일로 자격 증명이 생성됨

```sh
aws configure
aws configure --profile [계정]

#
aws sts get-caller-identity
aws sts get-caller-identity --profile [계정]
```

## 기본 환경변수

```sh
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_DEFAULT_REGION

# IAM 사용자
AWS_SESSION_TOKEN
```
