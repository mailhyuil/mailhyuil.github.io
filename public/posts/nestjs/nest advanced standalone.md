# nestjs standalone

```ts
async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  // your application logic here ...
  // const tasksService = app.get(TasksService);
  // const tasksService = app.select(TasksModule).get(TasksService, { strict: true });
}
bootstrap();
```
