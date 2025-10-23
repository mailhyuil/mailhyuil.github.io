# redis collection atomic

> redis의 collection은 atomic하게 동작한다.
>
> > 여러 명령어를 조합해서 쓸 때 Atomic이 깨지게 됩니다. 그래서 여러 명령어를 조합해서 쓸 때에는 꼭 Atomic이 깨지지 않는지 유의해야 합니다.

```sh
INCR key
```
