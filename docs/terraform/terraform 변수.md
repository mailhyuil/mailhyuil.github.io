# terraform 변수

## (input) variable

> module에 대한 변수
>
> > 코드 수정 없이 module에 영향을 줄 수 있는 요소

### variable.tf

```
variable "env" {
    type = string
    default = dev
}
```

### usage

```
tags = {
    Name = "default_vpc_${var.env}"
}
```

## local

> 표현식에 할당하는 짧은 이름
>
> > 표현식을 여러번 사용할 때 사용
> >
> > > tf 파일 생성

### local.tf

```
locals {
    az_a = "ap-northeast-2a"
    az_c = "ap-northeast-2c"
}
```

### usage

```
availabilty_zone = local.az_a
```

## output

> module이 리턴하는 값

### output.tf

```
output "vpc_id" {
    value = aws_vpc.default.id
}
```

### main.tf

```
resource "aws_vpc" "default" { # 이 리소스의 id 값이 output에 저장 됨

}
```
