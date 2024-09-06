# nest graphQL

> @nestjs/graphql의 데코레이터로 모델을 정의
>
> > 모델을 resolver에서 사용하면 자동으로 스키마가 생성됨

## install

```sh
npm i graphql

# server
npm i @nestjs/graphql
npm i @nestjs/apollo
npm i @apollo/server

# client
npm i @apollo/client
npm i apollo-angular
```

## app.module.ts

```ts
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "apps/server/src/schema.gql"),
      playground: true,
    }),
    UserModule, // UserResolver 가 Provider로 등록되어야 함
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
```

## user.model.ts

```ts
import { Field, ID, ObjectType } from "@nestjs/graphql";

@Exclude()
@ObjectType()
export class User {
  @Expose()
  @Field(() => ID)
  id: string;

  @Expose()
  @Field({ nullable: false })
  username: string;

  @Expose()
  @Field({ nullable: false })
  email: string;

  @Expose()
  @Field({ nullable: false })
  password: string;
}

@InputType()
export class CreateUserDTO {
  @IsNotEmpty()
  @Field()
  username: string;

  @IsNotEmpty()
  @Field()
  email: string;

  @IsNotEmpty()
  @Field()
  password: string;
}
```

## resolver

> controller대신 resolver 사용

```ts
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateUserDTO, User } from "./user.model";
import { UserService } from "./user.service";

@Resolver((of) => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query((returns) => User)
  async findById(@Args("id", { type: () => String }) id: string) {
    return await this.userService.findById(id);
  }

  @Query((returns) => [User])
  async findAll() {
    return await this.userService.findAll();
  }

  @Mutation((returns) => User)
  async create(@Args("user") user: CreateUserDTO) {
    const createdUser = await this.userService.create(user);
    return createdUser;
  }
}
```

## client

```ts
// query
this.apollo
  .watchQuery({
    query: gql`
      {
        findAll {
          username
          email
        }
      }
    `,
  })
  .valueChanges.subscribe((user: any) => {
    console.log(user);
  });
// mutation
this.apollo
  .watchQuery({
    mutation: gql`
      {
        create(user: { username: "hyuil", email: "hyuil@gmail.com", password: "1234" }) {
          username
        }
      }
    `,
  })
  .valueChanges.subscribe((user: any) => {
    console.log(user);
  });
// subscription
```
