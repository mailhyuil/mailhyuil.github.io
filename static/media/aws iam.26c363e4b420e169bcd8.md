# aws iam

> 보안, 인증, 인가
>
> > 개발을 위한 권한(Read & Write), Billing Viewer(예산 관리)(Read), Log Viewer 등의 권한(Read)을 부여할 수 있다.

## group

## user

## role

## access control

> user-based
>
> > group-based
> >
> > > role-based
> > >
> > > > attribute-based

## policy

> json으로 설정
>
> > Id-Based Policy
> >
> > > Resource-Based Policy

```json
{
  "Version": "2012-10-17",
  "Statement": [...] // 권한 부여 규칙(Rule 혹은 Policy)의 나열
}
```

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow", // 허용 여부 Allow | Deny
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::musma/*"
    }
  ]
}
```
