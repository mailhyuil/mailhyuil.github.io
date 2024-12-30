# prisma optimistic lock (낙관적 락)

> 애플리케이션 레벨에서 구현
>
> > FOR SHARE 수준의 lock에 가깝다.

```ts
const userEmail = "alice@prisma.io";
const movieName = "Hidden Figures";

const found = await client.seat.findFirst({
  where: {
    Movie: {
      name: movieName,
    },
    claimedBy: null,
  },
});

if (!found) {
  throw new Error(`Oh no! ${movieName} is all booked.`);
}

const seats = await client.seat.updateMany({
  data: {
    claimedBy: userEmail,
    version: {
      // 버전 올리기
      increment: 1,
    },
  },
  where: {
    id: found.id,
    version: found.version, // 버전 비교
  },
});

if (seats.count === 0) {
  throw new Error(`That seat is already booked! Please try again.`);
}
```
