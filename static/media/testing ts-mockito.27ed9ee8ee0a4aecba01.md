# testing ts-mockito

## install

```sh
npm i -D ts-mockito
```

## usage

```ts
const entity: Post = mock<Post>();
const user: User = mock<User>();
const dto = plainToInstance(PostDTO, entity);
```
