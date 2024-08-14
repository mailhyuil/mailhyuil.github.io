# prisma log

## prisma.service.ts

```ts
constructor() {
  super({ log: [{ emit: 'event', level: 'query' }] });

  this.$on('query', (e) => {
    console.log('\n' + 'Query ::: ' + e.query);

    console.log('Params ::: ' + e.params);

    console.log('Duration ::: ' + e.duration + 'ms' + '\n');
  });
}
```
