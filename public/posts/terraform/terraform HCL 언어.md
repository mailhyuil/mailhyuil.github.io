# terraform HCL

> terraform 전용 언어
>
> > main.tf 파일 내에 작성

## resource

> 가상 네트워크, 인스턴스 같은 객체

## data

> aws에서 정해놓은 데이터 (e.g. ami id, iam policy id)

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
