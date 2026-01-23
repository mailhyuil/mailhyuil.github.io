# firebase cloud functions trigger

firestore의 doc의 변경 이벤트를 감지하여 cloud function을 실행하는 방식

```ts
const onProfileUpdated = onDocumentUpdated(db, 'users/{uid}', async (event) => {
  const userId = event.data?.id;
  const profile = event.data?.data();
  console.log(userId, profile);
});
```
