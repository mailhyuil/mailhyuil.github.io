# nest graphQL

## install

```sh
npm i graphql
npm i graphql-tools
npm i graphql-subscriptions

# server
npm i @nestjs/graphql
npm i @nestjs/apollo
npm i @apollo/server

# client
npm i @apollo/client
npm i apollo-angular
```

## resolver

> controller대신 resolver 사용

```ts
import { ParseIntPipe, UseGuards } from "@nestjs/common";
import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { PubSub } from "graphql-subscriptions";
import { Cat } from "../graphql.schema";
import { CatsGuard } from "./cats.guard";
import { CatsService } from "./cats.service";
import { CreateCatDto } from "./dto/create-cat.dto";

const pubSub = new PubSub();

@Resolver("Cat")
export class CatsResolver {
  constructor(private readonly catsService: CatsService) {}

  @Query("cats")
  @UseGuards(CatsGuard)
  async getCats() {
    return this.catsService.findAll();
  }

  @Query("cat")
  async findOneById(
    @Args("id", ParseIntPipe)
    id: number
  ): Promise<Cat> {
    return this.catsService.findOneById(id);
  }

  @Mutation("createCat")
  async create(@Args("createCatInput") args: CreateCatDto): Promise<Cat> {
    const createdCat = await this.catsService.create(args);
    pubSub.publish("catCreated", { catCreated: createdCat });
    return createdCat;
  }

  @Subscription("catCreated")
  catCreated() {
    return pubSub.asyncIterator("catCreated");
  }
}
```

## cat.graphql

```graphql
type Query {
  cats: [Cat]
  cat(id: ID!): Cat
}

type Mutation {
  createCat(createCatInput: CreateCatInput): Cat
}

type Subscription {
  catCreated: Cat
}

type Owner {
  id: Int!
  name: String!
  age: Int
  cats: [Cat!]
}

type Cat {
  id: Int
  name: String
  age: Int
  owner: Owner
}
"""
Test comment
"""
input CreateCatInput {
  name: String
  age: Int
}
```
