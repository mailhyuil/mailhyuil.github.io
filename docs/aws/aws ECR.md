# aws ECR

> registry 생성 : `<project_name>/<image_name>:<tag>`

## Login

> Console(콘솔)에서는 직접적으로 ECR에 대한 username과 password(즉, Docker 로그인을 위한 자격 증명)를 제공하지는 않습니다. 이는 보안상의 이유로 AWS에서 자동으로 생성된 임시 자격 증명을 사용하기 때문입니다.
>
> > 따라서 AWS CLI를 사용하여 ECR에 로그인하는 것이 가장 일반적인 방법입니다.

```sh
aws ecr get-login-password --region region | docker login --username AWS --password-stdin aws_account_id.dkr.ecr.region.amazonaws.com
```

## Push

```sh
# Login 후

docker build . -f docker/nginx.Dockerfile -t aws_account_id.dkr.ecr.region.amazonaws.com/<project_name>/<image_name>:<tag>

docker push aws_account_id.dkr.ecr.region.amazonaws.com/<project_name>/<image_name>:<tag>
```

## Pull

```sh
# Login 후

docker pull aws_account_id.dkr.ecr.region.amazonaws.com/<project_name>/<image_name>:<tag>
```

## Lifecycle Policy

> untagged 상태의 이미지를 삭제하도록 하는게 좋다.
