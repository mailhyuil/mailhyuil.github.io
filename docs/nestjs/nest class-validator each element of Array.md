# nest class-validator each element of Array

```ts
@IsArray({ each:true })
@IsString({ each:true })
@IsNotEmpty({ each:true})
@ValidateNested({ each:true })
...
```
