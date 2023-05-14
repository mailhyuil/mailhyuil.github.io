# terraform HCL

> terraform 전용 언어
>
> > main.tf 파일 내에 작성

## resource

> 가상 네트워크, 인스턴스 같은 객체

## data

> aws에서 정해놓은 데이터 ex) ami id, iam policy id

## local-only data

> terraform 내에서만 작동하는 data source
>
> > rendering template
> >
> > > reading local files
> > >
> > > > string값 같은 data 비밀번호 .. 등등

## AWS Provider

```tf
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

# Configure the AWS Provider
provider "aws" {
  region = "us-east-1" # ap-northeast-2 한국 리전
}

# Create a VPC
resource "aws_vpc" "default" {
  cidr_block = "10.0.0.0/16"
}
```

## module

> 함께 사용되는 여러개의 resource에 대한 컨테이너
>
> > 디렉토리 안에 여러개의 .tf 파일로 구성됨
> >
> > > 리소스 설정을 패키징하거나 재사용하기 위한 주요 방법 중 하나
> > >
> > > > 테라폼은 적어도 하나의 모듈(root module)로 구성
> > > >
> > > > > resource 설정을 다른 디렉토리의 main.ts 파일에 넣고 module로 불러서 사용

### source

> 디렉토리 위치를 넣어주기

### version

# 변수

## (input) variable

> module에 대한 변수

## local

> 표현식에 할당하는 짧은 이름

## output

> module이 리턴하는 값
