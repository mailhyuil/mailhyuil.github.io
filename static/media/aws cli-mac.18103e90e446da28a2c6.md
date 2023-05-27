# aws cli mac

## install

```sh
curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"
sudo installer -pkg AWSCLIV2.pkg -target /
```

## configure

### credentials 파일로 등록

#### credentails file

```sh
[default]
aws_access_key_id=AKIAIOSFODNN7EXAMPLE
aws_secret_access_key=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
aws_session_token=IQoJb3JpZ2luX2IQoJb3JpZ2luX2IQoJb3JpZ2luX2IQoJb3JpZ2luX2IQoJb3JpZVERYLONGSTRINGEXAMPLE

[user1]
aws_access_key_id=AKIAI44QH8DHBEXAMPLE
aws_secret_access_key=je7MtGbClwBF/2Zp9Utk/h3yCo8nvbEXAMPLEKEY
aws_session_token=fcZib3JpZ2luX2IQoJb3JpZ2luX2IQoJb3JpZ2luX2IQoJb3JpZ2luX2IQoJb3JpZVERYLONGSTRINGEXAMPLE
```

#### config file

```sh
[default]
region=us-west-2
output=json

[profile user1]
region=us-east-1
output=text
```

### 환경변수로 등록

```sh
export AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
export AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
export AWS_DEFAULT_REGION=us-west-2
```

### cli로 등록하기

> 계정 access key 등록
>
> > sceret key 등록
> >
> > > default region name 등록
> > >
> > > > output format 설정 -> json

```sh
aws configure
aws sts get-caller-identity
```

### 유저가 여러개일 경우

```sh
aws configure --profile [계정]
aws sts get-caller-identity --profile [계정]
```

### --profile 생략하기

```sh
export AWS_PROFILE=[계정]
```
