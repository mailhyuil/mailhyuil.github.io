# CQRS

```ts
// 명령(Command) 처리를 위한 클래스
class CommandProcessor {
  constructor() {
    this.commands = {};
  }

  // 명령 등록
  registerCommand(commandName, commandHandler) {
    this.commands[commandName] = commandHandler;
  }

  // 명령 실행
  executeCommand(commandName, data) {
    const command = this.commands[commandName];
    if (command) {
      command(data);
    } else {
      console.log(`Command ${commandName} not found`);
    }
  }
}

// 쿼리(Query) 처리를 위한 클래스
class QueryProcessor {
  constructor() {
    this.queries = {};
  }

  // 쿼리 등록
  registerQuery(queryName, queryHandler) {
    this.queries[queryName] = queryHandler;
  }

  // 쿼리 실행
  executeQuery(queryName, data) {
    const query = this.queries[queryName];
    if (query) {
      return query(data);
    } else {
      console.log(`Query ${queryName} not found`);
    }
  }
}

// 명령(Command) 처리기 함수
function handleCreateUserCommand(data) {
  console.log(`Creating user ${data.name}`);
  // ...
}

// 쿼리(Query) 처리기 함수
function handleGetUsersQuery() {
  console.log('Fetching users');
  return [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
  ];
}

// 명령 처리기와 쿼리 처리기 생성
const commandProcessor = new CommandProcessor();
const queryProcessor = new QueryProcessor();

// 명령(Command) 등록
commandProcessor.registerCommand('CREATE_USER', handleCreateUserCommand);

// 쿼리(Query) 등록
queryProcessor.registerQuery('GET_USERS', handleGetUsersQuery);

// 명령(Command) 실행
commandProcessor.executeCommand('CREATE_USER', { name: 'John', age: 30 });

// 쿼리(Query) 실행
const users = queryProcessor.executeQuery('GET_USERS');
console.log(users);
```
