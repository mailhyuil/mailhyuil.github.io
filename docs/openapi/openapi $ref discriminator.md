# openapi $ref discriminator

> OpenAPI에서 다형성(polymorphism) 구현할 때 쓰는 핵심 기술
>
> > oneOf or anyOf와 같이 써야 됨
> >
> > > 공통 필드 하나를 기준으로 하위 타입을 자동 식별

```yaml
components:
  schemas:
    Pet:
      type: object
      discriminator:
        propertyName: type
      oneOf:
        - $ref: "#/components/schemas/Cat"
        - $ref: "#/components/schemas/Dog"
    Cat:
      type: object
      properties:
        type:
          type: string
          enum: [cat]
        meow:
          type: string
    Dog:
      type: object
      properties:
        type:
          type: string
          enum: [dog]
        bark:
          type: string
```
