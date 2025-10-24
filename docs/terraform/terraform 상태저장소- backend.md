# terraform 상태 저장소 backend

> backend = state data 파일이 영구적으로 저장
>
> > 상태는 trraform.tfstate에 저장됨
> >
> > > 기본으로 로컬 디스크에 저장됨
> > >
> > > > 실무에서는 terraform cloud나 aws s3같은 remote 서버에 저장
> > > >
> > > > > terraform state list 명령어로 볼 수 있음

## backend

> local
>
> > remote (민감한 정보가 노출 될 수 있음 -> private으로 설정)

## backend 설정

> private s3 버킷

```
resource "aws_s3_bucket" "tf_backend" {
    bucket = "유니크한-이름"

    versioning {
        enabled = true
    }

    tags = {
        Name = "tf_backend"
    }
}
```

```
terraform {
    backend "s3" {
        bucket = "유티크한-이름"
        key = "terraform.tfstate"
        region = "ap-northeast-2"
    }
}
```

# 상태 관리

> 테라폼은 인프라나 설정에 대해서 무조건 state로 저장
