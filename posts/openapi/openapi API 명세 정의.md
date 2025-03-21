# openapi API 명세 정의

> Rest API의 설계도와 같은 역할
>
> > 보통 json 또는 yaml 파일로 작성

## openapi.yaml

```yaml
openapi: 3.0.3 # 사용하는 스펙 버전

info: # API에 대한 정보 (제목, 버전, 설명 등)
  title: My API
  version: 1.0.0
  description: API 설명

servers: # 어떤 서버에서 API를 제공하는지, 여러 서버 정의 가능
  - url: http://api.example.com/v1
    description: Optional server description, e.g. Main (production) server
  - url: http://staging-api.example.com
    description: Optional server description, e.g. Internal staging server for testing

paths: # 각 엔드포인트의 경로와 HTTP 메서드 정의
  /users/{userId}:
    # ...
  /users:
    get:
      summary: 사용자 목록 조회
      operationId: findAllUsers
      responses: # 응답 코드와 설명
        "200":
          description: 성공
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/User"
      parameters: # 쿼리 파라미터 정의
        - name: page
          in: query
          description: 페이지 번호
          required: false
          schema:
            type: integer
            default: 1

components: # 재사용 가능한 공통 스키마, 응답, 파라미터 등 정의
  schemas:
    User:
      type: object
      properties:
        id:
          type: integer
        name:
          type: string
```
