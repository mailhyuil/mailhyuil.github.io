# firebase angular

## install

```sh
# 1. firebase cli 설치 (firebase-tools)
brew install firebase-cli

# 2 .로그인
firebase login

# 3. firebase 프로젝트 초기화
# 4 .public directory를 반드시 dist/angular(빌드된 index.html이 들어있는 폴더)로 설정!
firebase init # firebase.json 생성

# 5 .sdk 설치
ng add @angular/fire

# 6 .배포
firebase deploy
```

## firebase sdk 사용

```ts
@NgModule({
  imports: [
    provideFirebaseApp(() => initializeApp({ ... })),
    provideFirestore(() => getFirestore()),
  ],
  ...
})
```

## firebase sdk 사용 (standalone)

```ts
// main.ts
importProvidersFrom([
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
    ]),
```

## 사용

```ts
import { Firestore, collectionData, collection } from "@angular/fire/firestore";

export class AppComponent {
  fireStore: FireStore = inject(Firestore);

  constructor() {
    const itemCollection = collection(this.firestore, "items");
    this.item$ = collectionData(itemCollection);
  }
}
```
