# firebase firestore transaction

```dart
FirebaseFirestore.instance.runTransaction((tx) async {
  final aToB = tx.get(docAtoB);
  final bToA = tx.get(docBtoA);

  if (aToB.exists && bToA.exists) {
    tx.set(matchDoc, {...});
  }
});
```
