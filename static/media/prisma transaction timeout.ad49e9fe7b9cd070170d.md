# prisma transaction timeout.md

> 기본으로 5000ms 가 넘으면 rollback 된다.
>
> > 오래걸리는 작업이면 늘려주자

```
await prisma.$transaction(
  async (tx) => {
    // Code running in a transaction...
  },
  {
    maxWait: 5000, // default: 2000
    timeout: 10000, // default: 5000
    isolationLevel: Prisma.TransactionIsolationLevel.Serializable, // optional, default defined by database configuration
  }
)
```
