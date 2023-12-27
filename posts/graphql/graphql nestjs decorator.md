# graphql nestjs decorator

## decorators

```js
@ObjectType() // ObjectType : model
@InputType() // InputType : dto
@Field() // Field : property
@ArgsType() // ArgsType : args
@InterfaceType() // InterfaceType : interface

@Resolver() // Resolver : controller
@Query() // Query : GET
@Mutation() // Mutation : POST, PATCH, PUT, DELETE
@ResolveField() // ResolveField : 관계를 어떻게 가져올지 정의 (ex. user의 posts)

@Subscription() // Subscription : websocket

@Args() // Args : args
@Root() // Root : root
@Parent() // Parent : parent
@Info() // Info : info
@Context() // Context : context

@Scalar() // Scalar : custom scalar

@Directive() // Directive : custom directive
```
