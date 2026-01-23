# firebase firestore collection group query

부모가 다른 같은 서브 컬렉션을 조회하기 위한 쿼리

```ts
// user/:uid/comments
// post/:postId/comments
const query = collectionGroup(db, 'comments');
const snapshot = await getDocs(query);
snapshot.forEach(doc => {
  console.log(doc.id, doc.data());
});
```
