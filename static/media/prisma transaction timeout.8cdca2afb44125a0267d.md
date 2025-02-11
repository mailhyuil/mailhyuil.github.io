# prisma transaction timeout.md

> The maximum amount of time the interactive transaction can run before being canceled and rolled back.
>
> > The default value is 5 seconds.
> >
> > > 오래걸리는 작업이면 늘려주자

```ts
await prisma.$transaction(
  async tx => {
    // Code running in a transaction...
  },
  {
    maxWait: 5000, // default: 2000
    timeout: 10000, // default: 5000
    isolationLevel: Prisma.TransactionIsolationLevel.Serializable, // optional, default defined by database configuration
  },
);
```
