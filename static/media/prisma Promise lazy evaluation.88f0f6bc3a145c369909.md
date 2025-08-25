# prisma Promise lazy evaluation

> prisma의 create, update는 Lazy Evaluation을 사용한다.
>
> > 즉 await, then, catch를 사용하지 않으면 실행되지 않는다.

```sh
This happens because Prisma queries are then-ables, meaning they only execute when you call await or .then() or .catch(). This is called lazy evaluation. This is different than a regular promise which starts executing immediately. There's an issue in the Prisma docs repository about this which you can check out for more information.

How to implement: Check out this library: https://github.com/sindresorhus/p-lazy
```
