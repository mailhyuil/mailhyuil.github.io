# nest CQRS

## install

```sh
npm install @nestjs/cqrs
```

## File Structure

```
http handler   => controller              - [interface]
crud handler   => command, query, event   - [app]
business logic => aggregateRoot           - [domain]
database logic => repository              - [infra]
```

## Query

## Command

## Event

## Saga
