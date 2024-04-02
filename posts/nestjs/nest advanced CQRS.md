# nest CQRS

## install

```sh
npm install @nestjs/cqrs
```

## File Structure

```sh
http handler   => controller              - [interface]
crud handler   => command, query, event   - [app]
business logic => aggregateRoot           - [domain]
database logic => repository              - [infra]
```

## Command / Query

## Event

## Saga
