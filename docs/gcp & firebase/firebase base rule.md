# firebase base rule

- firebase의 보안 규칙을 설정하는 방식
- 기본으로 모든 권한이 막혀있는 상태
- request에서 요청의 정보를 가져올 수 있다.
  request.auth, request.query...
- read: get, list
- write: create, update, delete
- `{userId}` : 내부에서 userId를 가져올 수 있다.
- `$(userId)` : 문자열 보간법을 사용할 수 있다.

```text
rules_version = '2';
service cloud.firestore {
  function isSignedIn() {
    return request.auth != null;
  }

  match /databases/{database}/documents {
    match /posts/{postId} {
      allow read: if true;
      allow get: if true;
      allow list: if true;

      allow write: if request.auth != null;
      allow create: if isSignedIn();
      allow update: if request.auth != null && request.auth.uid == $(userId);
      allow delete: if false;
    }
  }
}
```
