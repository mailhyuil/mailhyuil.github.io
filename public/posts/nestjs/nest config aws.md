# nestjs config aws

```ts
// config/secrets.config.ts
import { SecretsManagerClient, GetSecretValueCommand } from '@aws-sdk/client-secrets-manager';

export default async () => {
  const client = new SecretsManagerClient({ region: 'ap-northeast-2' });

  const dbSecrets = await client.send(
    new GetSecretValueCommand({ SecretId: 'prod/database' })
  );

  const apiSecrets = await client.send(
    new GetSecretValueCommand({ SecretId: 'prod/api-keys' })
  );

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
