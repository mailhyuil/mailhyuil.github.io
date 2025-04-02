# nest CQRS

## install

```sh
npm install @nestjs/cqrs
```

## File Structure

```sh
# http handler - data format : DTO
/interface/some.controller.ts

# crud handler - data format : domain model (aggregateRoot)
/app/commands/some.command.ts
/app/queries/some.query.ts
/app/events/some.event.ts
/app/sagas/some.saga.ts

# business logic - data format : domain model (aggregateRoot)
/domain/some.model.ts

# data access logic - data format : entity
/infra/some.repository.ts
```

## 용어

```ts
Data Transfer Object (DTO) : Data를 유효한 형식으로 전달하기 위한 객체
Domain Model : 비즈니스 로직을 포함한 객체
Entity : 데이터베이스에 저장되는 객체
Command : 비즈니스의 쓰기 로직을 실행하는 객체
Query : 비즈니스의 읽기 로직을 실행하는 객체
Event : 이벤트를 발생시키는 객체
Saga : 이벤트를 통해 비즈니스 로직을 실행하는 객체 (분산 트랜잭션 수행 가능)
```
