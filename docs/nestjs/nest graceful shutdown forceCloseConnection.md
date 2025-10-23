# nest graceful shutdown forceCloseConnection

## main.ts

```ts
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    forceCloseConnection: true, // forceCloseConnection을 활성화 (default: false)
  });
}
```
