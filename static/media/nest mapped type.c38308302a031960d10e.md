# nest mapped type

> dto 생성 시 도움이 되는 type

## PartialType()

```ts
export class UpdateCatDTO extends PartialType(CreateCatDTO) {}
```

## PickType()

```ts
export class UpdateCatAgeDTO extends PickType(CreateCatDTO, ["age"] as const) {}
```

## OmitType()

```ts
export class UpdateCatDTO extends OmitType(CreateCatDTO, ["name"] as const) {}
```

## IntersectionType()

```ts
export class UpdateCatDTO extends IntersectionType(CreateCatDTO, AdditionalCatInfo) {}
```
