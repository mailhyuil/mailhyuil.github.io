# openapi security, securitySchemes - auth

> components.securitySchemes + security 조합으로 정의

```yaml
components:
  securitySchemes:
    BearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT

security:
  - BearerAuth: []
```

## OAuth2

```yaml
components:
  securitySchemes:
    OAuth2Auth:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://example.com/oauth/authorize
          tokenUrl: https://example.com/oauth/token
          scopes:
            read: 읽기 권한
            write: 쓰기 권한

security:
  - OAuth2Auth:
      - read
      - write
```
