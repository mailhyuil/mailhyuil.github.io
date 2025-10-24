# nest config aws

```ts
// config/secrets.config.ts
import { SecretsManagerClient, GetSecretValueCommand } from '@aws-sdk/client-secrets-manager';

export default async () => {
  const secretsManager = new SecretsManagerClient({ region: 'ap-northeast-2' });
  const ssm = new SSMClient({ region: 'ap-northeast-2' });
  // secrets
  const dbSecrets = await secretsManager.send(
    new GetSecretValueCommand({ SecretId: 'prod/database' })
  );
  const apiSecrets = await secretsManager.send(
    new GetSecretValueCommand({ SecretId: 'prod/api-keys' })
  );
  // system parameters (e.g. arn, url, etc.)
  const param = await ssm.send(new GetParameterCommand({ Name: '/prod/some-param', WithDecryption: true }));
  console.log('SSM Parameter:', param.Parameter?.Value);

  return {
    database: JSON.parse(dbSecrets.SecretString),
    apiKeys: JSON.parse(apiSecrets.SecretString),

  };
};

// app.module.ts
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [secretsConfig], // Secrets Manager 통합
      cache: true,
    }),
  ],
})
```
