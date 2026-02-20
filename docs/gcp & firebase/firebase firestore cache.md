# firebase firestore cache

firestore는 online 상태에서는 항상 최신의 데이터를 서버에서 가져오고
offline 상태에서는 local cache를 사용하여 이전에 읽었던 데이터를 메모리에 저장하여 빠르게 읽을 수 있도록 함

## 캐시 확인

```dart
final snap = await FirebaseFirestore.instance
    .collection('profiles')
    .doc(uid)
    .get();

debugPrint(
  'profile($uid) fromCache=${snap.metadata.isFromCache}',
);

await ref.get(const GetOptions(source: Source.cache)); // 항상 캐시에서 읽음
await ref.get(const GetOptions(source: Source.server)); // 항상 서버에서 읽음
```
