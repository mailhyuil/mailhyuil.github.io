# prisma log

## prisma.service.ts

```ts
constructor() {
  super({ log: [{ emit: 'event', level: 'query' }] });
  //@ts-ignore
  this.$on('query', (e) => {
    //@ts-ignore
    console.log('\n' + 'Query ::: ' + e.query);
    //@ts-ignore
    console.log('Params ::: ' + e.params);
    //@ts-ignore
    console.log('Duration ::: ' + e.duration + 'ms' + '\n');
  });
}
```
