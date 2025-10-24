# nest class-validator @ValidateNested

```ts
class CreatePostDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  title: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCommentDto)
  comments: CreateCommentDto[];
}
```
