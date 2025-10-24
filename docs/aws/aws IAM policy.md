# aws IAM policy

> json 형식으로 작성되며, AWS 서비스에 대한 접근 권한을 설정하는데 사용된다.

## policy Statement 구성요소

```txt
Sid                      Statement ID로 statement 를 구분하기 위해서 임의의 값을 넣어서 사용
Effect                   허용을 하는 정책인지, 차단하는 정책인지 (Allow | Deny)
Principal/NotPrincipal   사용자, 그룹, 역할 등을 지정 (접근을 허용, 차단할 대상을 명시 : arn, id...) (optional)
Action/NotAction         허용 또는 차단할 행위를 지정
Resource/NotResource     Action이 영향을 미치는 리소스 리스트를 지정 (요청의 목적지를 지정)
Condition                조건을 충족되는 경우에만 해당 정책을 적용 (허용,차단 조건을 명시)

# 모든 Principal에게 이 Resource에 대한 Action을 Condition에 따라서 Effect한다.
```

## usage

```json
/* 하나의 정책에 다수의 Statements가 사용된 예 */
{
  "Version": "2012-10-17", // “2012–10–17”, “2008–10–17” 값을 가질 수 있다.
  "Statement": [
    {
      "Sid": "FirstStatement", // Statement ID로 statement 를 구분하기 위해서 사용
      "Effect": "Allow", // 해당 설정 적용을 Allow / Deny
      "Principal": {
        // 사용자, 그룹, 역할 등을 지정
        "AWS": "arn:aws:iam::123456789",
        "Service": "ec2.amazonaws.com",
        "Federated": "arn:aws:iam::123456789:role/role-name",
        "CanonicalUser": "123456789"
      },
      "Action": [
        // 허용할 행위(액션)
        "s3:List*",
        "s3:Get*"
      ],
      "Resource": [
        // Action이 영향을 미치는 리소스 리스트를 지정
        "arn:aws:s3:::confidential-data",
        "arn:aws:s3:::confidential-data/*"
      ],
      "Condition": {
        "Bool": { "aws:MultiFactorAuthPresent": "true" }
      } // 조건을 충족되는 경우에만 해당 정책을 적용
    }
  ]
}
```
