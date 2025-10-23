# terraform

> IaC 플랫폼
>
> > .tf 포멧 사용
> >
> > > HCL언어 사용
> > >
> > > > 기본적으로 main.tf, provider.tf, data.tf, output.tf, variables.tf, backend.tf 파일 생성하자
> > > >
> > > > > 모듈도 마찬가지

## install

```
choco install terraform

brew install terraform
```

## workflow

1. Refresh
   > 현재 인프라 상태 확인
2. Plan
   > 현재 상태 -> 원하는 상태로 구성
   >
   > > 예상되는 변경 지점 확인
3. Apply
   > 적용
4. Destory
   > 삭제

```
terraform init
terraform plan
terraform apply
terraform destroy
```
