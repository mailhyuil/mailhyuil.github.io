# redis type HyperLogLog

> count의 근사치를 구하는 자료구조이다. (0.81% 오차율)
>
> > set와 비슷한 구조이지만 실제로 데이터를 저장하지 않는다.
> >
> > > 내부 알고리즘으로 데이터를 저장하지 않고 count의 근사치를 구한다.
> > >
> > > > set을 사용하게 되면 메모리를 많이 사용, HyperLogLog는 언제든지 12KB로 고정된다.

## redis-cli

```sh
PFADD key element
PFCOUNT key
```

## nodejs

```ts
async increaseViewCount(id: string, req: Request) {
    const cacheKey = `resource:view:${id}`;
    const ip = req.ip;
    if (!ip) return;
    await this.redis.pfAdd(cacheKey, ip);
}
```
