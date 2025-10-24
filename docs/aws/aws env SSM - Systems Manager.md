# aws env SSM - Systems Manager

> AWS Systems Manager(SSM)는 AWS 리소스 및 온프레미스 서버를 관리하기 위한 통합 관리 서비스입니다. SSM을 사용하면 인스턴스 구성, 소프트웨어 배포, 패치 관리, 자동화된 작업 실행 등을 중앙에서 관리할 수 있습니다.
>
> > 일반 String 변수는 parameter-store를 통해 환경변수를 무료로 관리할 수 있음
> >
> > > SecureString 변수는 암호화된 형태로 저장되어 민감한 정보를 보호할 수 있음 (예: 데이터베이스 비밀번호, API 키 등)
> > >
> > > 단 kms(Key Management Service) Decrypt를 사용 시 비용 발생 (--with-decryption 옵션 사용 시)

## aws cli

```sh
# SecureString 저장
aws ssm put-parameter \
  --type "SecureString" \
  --name "/myapp/prod/DATABASE_URL" \
  --value "postgresql://username:password@your-db-host:5432/dbname" \
  --tags "Key=Environment,Value=Production" \
  --overwrite

# SecureString 가져오기
aws ssm get-parameter \
  --name "/myapp/prod/DATABASE_URL" \
  --with-decryption

# String 저장
aws ssm put-parameter \
  --type "String" \
  --name "/myapp/prod/AWS_S3_REGION" \
  --value "ap-northeast-2" \
  --description "S3 Region" \
  --tags "Key=Environment,Value=Production"
  --overwrite

# String 가져오기
aws ssm get-parameter \
  --name "/myapp/prod/AWS_S3_REGION"
```

## aws sdk

```ts
import { SSMClient, GetParameterCommand } from "@aws-sdk/client-ssm";

const ssmClient = new SSMClient();

export const getSecureStringParameter = async (name: string): Promise<string> => {
  const command = new GetParameterCommand({
    Name: name,
    WithDecryption: true, // SecureString인 경우 복호화
  });

  const response = await ssmClient.send(command);

  if (!response.Parameter || !response.Parameter.Value) {
    throw new Error(`Parameter ${name} not found`);
  }

  return response.Parameter.Value;
};

export const getStringParameter = async (name: string): Promise<string> => {
  const command = new GetParameterCommand({
    Name: name,
    WithDecryption: false, // String인 경우 복호화 불필요
  });

  const response = await ssmClient.send(command);

  if (!response.Parameter || !response.Parameter.Value) {
    throw new Error(`Parameter ${name} not found`);
  }

  return response.Parameter.Value;
};
```
