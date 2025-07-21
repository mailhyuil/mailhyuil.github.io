# firebase flutter service

```dart
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter_firebase/models/memo_model.dart';

class FirestoreService {
  final firestore = FirebaseFirestore.instance;

  Stream<List<MemoModel>> getMemos() {
    try {
      return firestore.collection('memos').snapshots().map((querySnapshot) {
        return querySnapshot.docs
            .map((doc) => MemoModel.fromJson(doc.data()))
            .toList();
      });
    } catch (e) {
      print('Error getting memos: $e');
      return Stream.value([]); // Return an empty list on error
    }
  }

  Future<void> createMemo(MemoModel memo) async {
    try {
      await firestore.collection('memos').add(memo.toJson());
    } catch (e) {
      print('Error creating memo: $e');
    }
  }

  Future<void> updateMemo(String memoId, MemoModel updatedMemo) async {
    try {
      await firestore
          .collection('memos')
          .doc(memoId)
          .update(updatedMemo.toJson());
    } catch (e) {
      print('Error updating memo: $e');
    }
  }

  Future<void> deleteMemo(String memoId) async {
    try {
      await firestore.collection('memos').doc(memoId).delete();
    } catch (e) {
      print('Error deleting memo: $e');
    }
  }
}
```
