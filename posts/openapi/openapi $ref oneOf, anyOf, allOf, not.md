# openapi oneOf, anyOf, allOf, not

> 모델 상속, nested 구조, 조건부 스키마를 정의할 때 사용

```yaml
components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: integer
        name:
          type: string
    AdminUser:
      allOf: # 상속
        - $ref: "#/components/schemas/User"
        - type: object
          properties:
            role:
              type: string
              enum: ["admin", "superadmin"]
    UserOrAdminUser:
      oneOf: # 조건부 스키마
        - $ref: "#/components/schemas/User"
        - $ref: "#/components/schemas/AdminUser"
    NotUser:
      not: # 부정 조건
        $ref: "#/components/schemas/User"
```
