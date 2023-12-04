# rxjs share

## bad

```js
getData = this.httpClient.get();

// observable 시퀀스가 두개가 생성된다
// 비효율
getData.subscribe();
getData.subscribe();
```

## good

```js
getData = this.httpClient.get().share();

// observable 시퀀스 하나를 공유한다.
getData.subscribe();
getData.subscribe();
```
