# terraform cdktf

> aws에서 지원하는 terraform cdk
>
> > 원래 cdk는 aws의 cloudformation을 wrapping한 것
> >
> > > 그걸 terraform용으로 바꾼 것

## install

> terraform cli 설치
>
> > nodejs 설치
> >
> > > docker 설치

```sh
npm install --global cdktf-cli@latest
```

## authentication config

> $HOME/.aws/credentials

```sh
AWS_ACCESS_KEY_ID="anaccesskey"
AWS_SECRET_ACCESS_KEY="asecretkey"
AWS_REGION="us-west-2"
```
