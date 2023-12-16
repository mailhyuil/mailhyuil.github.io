# nest advanced message queue bullmq Injectable Processor

> Injectable에 @Processor를 사용해서 주입할 수 있게 만들어준다.
>
> > WorkerHost를 상속받아야 한다.

```ts
@Processor("test", { concurrency: 5 })
@Injectable()
export class TestProcessor extends WorkerHost {
  constructor(@Inject(Logger) private readonly logger: Logger) {
    super();
  }
  async process(job: Job, token?: string) {
    // some work
    job.updateProgress(100);
    return "completed";
  }
}
```
