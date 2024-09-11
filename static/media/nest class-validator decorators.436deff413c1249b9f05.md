# class-validator decorators

```js
// array
@IsArray()
@Length(10, 20)
@Min(0)
@Max(10)
// string
@IsString()
@IsEmail()
@IsFQDN() // 전체 도메인 이름
@Contains('hello')
// number
@IsNumber()
@IsInt()
// Date
@IsDate()
@IsISO8601() or @Type(()=>Date)
// enum
@IsEnum(MyEnum, {each:true})
// boolean
@IsBoolean()
// object
@IsObject()
@IsInstance(MyClass)
...
```
