# terraform 조건문

## condition ? a : b

## for문과 함께 사용

> [for s in var.list : a if condition]

## example

> env가 prd일 때는 생성 안되게 하기

```
variable "envs" {
    type = list(string)
    default = ["dev", "prd", ""]
}

module "vpc_list" {
    for_each = toset([for env in var.envs : env if env != ""])
    source = "./custom_vpc"
    env = each.key
}
```

```
resource "aws_subnet" "public_subnet_1" {
    count = var.env == "prd" ? 0 : 1
}
```
