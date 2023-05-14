# terraform 반복문

## count

```
module "personal_custom_vpc" {
    count = 2
    source = "./custom_vpc"
    env = "personal_${count.index}"
}
```

## for_each

```
variable "names" {
    type = list(string)
    default = ["me", "someone"]
}

module "personal_custom_vpc" {
    for_each = toset(var.names) # type casting
    source = "./custom_vpc"
    env = "personal_${each.key}"
}
```

## for

```
variable "names" {
    type = list(string)
    default = ["me", "someone"]
}

module "personal_custom_vpc" {
    for_each = toset([for name in var.names : "${name}_human"]) # type casting
    source = "./custom_vpc"
    env = "personal_${each.key}"
}
```
