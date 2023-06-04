# aws iam

> 보안, 인증, 인가

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
