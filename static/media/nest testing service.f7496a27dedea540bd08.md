# nest testing service

```
존재하는 모든 entity를 반환한다. (read)
조건에 맞는 entity를 반환한다. (read)
entity의 id가 주어진다면 해당 id의 entity를 반환한다. (read)
존재하지 않는 entity의 id가 주어진다면 NotFoundException을 반환한다. (read)

주어진 값으로 새로운 entity를 생성하고 생성된 entity를 반환한다. (create)
올바르지 않은 값을 주어진다면 BadRequestException을 반환한다. (create)

entity의 id가 주어진다면 해당 id의 entity를 수정하고 수정된 entity를 반환한다. (update)
올바르지 않은 값을 주어진다면 BadRequestException을 반환한다. (update)
존재하지 않는 entity의 id가 주어진다면 NotFoundException을 반환한다. (update)

entity의 id가 주어진다면 해당 id의 entity를 삭제한다. (delete)
존재하지 않는 entity의 id가 주어진다면 NotFoundException을 반환한다. (delete)

비동기로 동작하는 로직을 테스트한다. (async)
```
