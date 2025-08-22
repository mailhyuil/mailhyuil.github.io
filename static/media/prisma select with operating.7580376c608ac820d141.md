# prisma select with operating

```ts
const data = await prisma.usCountiesPopEst2019.findMany({
  select: {
    county_name: true,
    state_name: true,
    births_2019: true,
    deaths_2019: true,
    natural_increase: {
      subtract: ["births_2019", "deaths_2019"],
    },
  },
});
```
