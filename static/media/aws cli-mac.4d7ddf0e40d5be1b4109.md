# aws cli mac

## install

```
curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"
sudo installer -pkg AWSCLIV2.pkg -target /
```

## configure

> 계정 access key 등록
>
> > sceret key 등록
> >
> > > default region name 등록
> > >
> > > > output format 설정 -> json

```
aws configure
aws sts get-caller-identity
```

### 유저가 여러개일 경우

```
aws configure --profile [계정]
aws sts get-caller-identity --profile [계정]
```

### --profile 생략하기

```
export AWS_PROFILE=[계정]
```
