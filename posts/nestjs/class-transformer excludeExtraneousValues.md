# class-transformer excludeExtraneousValues

> Mapped Types를 사용하여 DTO를 만들 때, class-transformer의 excludeExtraneousValues 옵션을 사용하면, DTO에 없는 필드는 제외된다.

## DTO

```ts
export class ScoreSumDTO
  extends PickType(ScoreDTO, [
    "id",
    "test",
    "createdAt",
    "updatedAt",
    "discriminationSum",
    "deletionSum",
    "substitutionSum",
    "synthesisSum",
    "memorySum",
    "recallColorSum",
    "recallNumberSum",
    "readingSum",
    "recognitionSum",
    "feedback",
  ])
  implements IScoreSumDTO {}
```

## Controller

```js
@Get('findByTestId/:testId')
async findFirstByTestId(@Param('testId') testId: string) {
    const found = await this.scoreService.findFirstByTestId(testId);
    return plainToInstance(ScoreSumDTO, found, {
        excludeExtraneousValues: true,
    });
}
```
