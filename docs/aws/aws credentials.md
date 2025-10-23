# aws credentials

> 콘솔에서 오른쪽 상단 사용자 이름 클릭 -> 내 보안 자격 증명 (Security credentials) -> 액세스 키 만들기
>
> > CLI, SDK 는 ~/.aws에 있는 credentials, config 파일을 자동으로 로드
> >
> > nodejs가 ~/.aws에 접근이 가능해야함

## ~/.aws/config

> 덜 민감한 설정 (region 등)

```sh
[default]
region = ap-northeast-2
output = json

[profile sangbaek-dev]
region = us-west-2
output = json
```

## ~/.aws/credentials

> 민감한 설정 (access key id, secret access key)

```sh
[default]
aws_access_key_id = YOUR_DEFAULT_ACCESS_KEY_ID
aws_secret_access_key = YOUR_DEFAULT_SECRET_ACCESS_KEY
# region = ap-northeast-2 # config에 넣는걸 권장

[sangbaek-dev]
aws_access_key_id = YOUR_SANGBAEK_DEV_ACCESS_KEY_ID
aws_secret_access_key = YOUR_SANGBAEK_DEV_SECRET_ACCESS_KEY
# region = ap-northeast-2 # config에 넣는걸 권장
```
