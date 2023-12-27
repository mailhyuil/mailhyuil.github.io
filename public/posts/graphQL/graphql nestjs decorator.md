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
@ResolveField() // ResolveField : property

@Subscription() // Subscription : websocket

@Args() // Args : args
@Root() // Root : root
@Parent() // Parent : parent
@Info() // Info : info
@Context() // Context : context

@Scalar() // Scalar : custom scalar

@Directive() // Directive : custom directive
```
