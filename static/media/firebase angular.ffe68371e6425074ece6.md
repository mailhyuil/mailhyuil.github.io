# firebase angular

## install

```sh
# 1. firebase cli 설치 (firebase-tools)
brew install firebase-cli
npm i -g firebase-tools

# 2 .로그인
firebase login
firebase login:list
firebase login:add mailhyuil@gmail.com
firebase login:use mailhyuil@gmail.com

# 3. firebase 프로젝트 초기화
firebase init # firebase.json 생성
# 이미 firebase 콘솔에서 프로젝트를 만들었다면 Use an existing project를 선택
# 이미 angular로 프로젝트를 만들었다면 Do you want to use a web framework?를 생략
# public directory를 반드시 dist/angular(빌드된 index.html이 들어있는 폴더)로 설정!

# 4 .sdk 설치
ng add @angular/fire

# 5 .배포
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

## usage

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
