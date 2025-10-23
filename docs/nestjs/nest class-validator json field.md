# nest class-validator json field

## 필드의 값이 Json String 일 때

```js
@ApiPropertyOptional()
@IsOptional()
@ValidateNested()
@Transform(({ value }) =>
  value ? plainToInstance(EventFilterDTO, JSON.parse(value)) : undefined
)
filter?: EventFilterDTO;
```

## 필드의 값이 Json 일 때

```js
@ApiPropertyOptional()
@IsOptional()
@ValidateNested()
@Type(() => EventFilterDTO)
filter?: EventFilterDTO;
```
