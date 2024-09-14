# aws policy

> json 형식으로 작성되며, AWS 서비스에 대한 접근 권한을 설정하는데 사용된다.

```json
/* 하나의 정책에 다수의 Statements가 사용된 예 */
{
  "Version": "2012-10-17", // “2012–10–17”, “2008–10–17” 값을 가질 수 있다.
  "Statement": [
    {
      "Sid": "FirstStatement", // Statement ID로 statement 를 구분하기 위해서 사용
      "Effect": "Allow", // 해당 설정 적용을 Allow / Deny
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
