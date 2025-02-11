# aws base resource

> AWS에서는 모든 것이 리소스다
>
> > e.g. EC2 Instance, IAM user, VPC, S3 Bucket

## ARN (Amazon Resource Name)

> 모든 리소스는 고유한 ARN을 가진다
>
> > arn을 통해서 리소스를 식별하고, 권한을 부여할 수 있다 (policy)

```txt
arn:partition:service:region:account-id:resource-id
```
