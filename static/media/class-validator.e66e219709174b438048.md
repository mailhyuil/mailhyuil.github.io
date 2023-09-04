# class-validator

## install

```
npm install class-validator --save
```

## method

```
validate()
validateOrReject()
```

## decorator

```
@Length(10, 20)
@Contains('hello')
@IsInt()
@Min(0)
@Max(10)
@IsEmail()
@IsFQDN()
@IsDate()
...
```

# class-transformer 두개의 dto를 하나의 body에

> dto를 묶은 dto를 생성해서 type 명시

```
export class CreateWebComplexAndWebComplexViewsDTO {
  @ApiProperty()
  @IsNotEmpty()
  @Type(() => CreateWebComplexDTO)
  complex: CreateWebComplexDTO;

  @ApiProperty()
  @IsOptional()
  @Type(() => CreateWebComplexViewDTO)
  views: CreateWebComplexViewDTO[];
}
```
