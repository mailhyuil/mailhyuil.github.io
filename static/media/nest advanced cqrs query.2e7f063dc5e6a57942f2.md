# nest CQRS

## Query

```ts
export class GetHeroesQuery {}
```

## Query handler

```ts
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { HeroRepository } from "../../repository/hero.repository";
import { GetHeroesQuery } from "../impl";

@QueryHandler(GetHeroesQuery)
export class GetHeroesHandler implements IQueryHandler<GetHeroesQuery> {
  constructor(private readonly repository: HeroRepository) {}

  async execute(query: GetHeroesQuery) {
    return this.repository.findAll(query);
  }
}
```

## controller

```ts
import { QueryBus } from "@nestjs/cqrs";
@Controller("hero")
export class HeroesGameController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get()
  async findAll(): Promise<Hero[]> {
    return this.queryBus.execute(new GetHeroesQuery());
  }
}
```
