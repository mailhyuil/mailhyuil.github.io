# prisma update relations

```js
async update(id: string, data: UpdateBusDTO) {
  const updated = await this.prisma.$transaction(async (tx) => {
    return await tx.bus.update({
      where: {
        id,
      },
      data: {
        name: data.name,
        seats: {
          deleteMany: {
            number: { notIn: data.seats.map((seat) => seat.number) },
          },
          updateMany: data.seats.map((seat) => ({
            where: { number: seat.number },
            data: {
              disabled: seat.disabled,
            },
          })),
          createMany: {
            data: data.seats.map((seat) => ({ // busId 필요없음
                number: seat.number,
                disabled: seat.disabled,
            })),
            skipDuplicates: true, // @unique가 겹치면 skip
          },
        },
      },
    });
  });
  return plainToInstance(BusDTO, updated);
}
```
