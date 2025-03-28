# openapi $ref

> 재사용을 위한 핵심 기능
>
> > OpenAPI에서 반복되는 구조를 따로 정의해놓고, 그걸 "참조"할 때 $ref를 사용
> >
> > > $ref: "#/components/schemas/\*"로 정의된 스키마를 참조

```yaml
paths:
  /users:
    get:
      responses:
        "200":
          description: OK
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/User"
components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: integer
        name:
          type: string
```
