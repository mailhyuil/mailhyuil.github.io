# aws credentials

## ~/.aws/credentials에서 로드

```sh
[default] ; default profile
aws_access_key_id = <DEFAULT_ACCESS_KEY_ID>
aws_secret_access_key = <DEFAULT_SECRET_ACCESS_KEY>

# [personal-account] ; personal account profile
# aws_access_key_id = <PERSONAL_ACCESS_KEY_ID>
# aws_secret_access_key = <PERSONAL_SECRET_ACCESS_KEY>

# [work-account] ; work account profile
# aws_access_key_id = <WORK_ACCESS_KEY_ID>
# aws_secret_access_key = <WORK_SECRET_ACCESS_KEY>
```

## ~/.aws/config 로드

```sh
[default]
region = YOUR_REGION
```
