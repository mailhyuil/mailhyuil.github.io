# firebase firestore 실시간 리스너 - snapshots

- snapshots() = “이 쿼리 결과가 바뀌면 자동으로 다시 알려줘”
- 웹소켓에 가까운 스트림

```dart
FirebaseFirestore.instance.collection('memos').snapshots().listen((snapshot) {
  snapshot.docs.forEach((doc) {
    print(doc.data());
  });
});
```
