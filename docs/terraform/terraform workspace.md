# terraform workspace

> 환경에 따라서 state를 관리하고자 할 때 사용하는 기능
>
> > workspace별로 state가 별도로 저장됨
> >
> > > 일부 backend만 multiple workspace 지원 (kubernetes, local, postgres, terraform_cloud, s3)

## 개발/운영 환경 분리

### workspace 생성

```
terraform workspace new dev
terraform workspace new prd
terraform workspace new test

terraform workspace delete test

terraform workspace select default
```

### workspace 참조

```
env = terraform.workspace
```
