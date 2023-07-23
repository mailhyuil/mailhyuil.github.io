# firebase angular

## install

```sh
ng add @angular/fire

firebase init # firebase.json 생성
```

## imports

```ts
@NgModule({
  imports: [
    provideFirebaseApp(() => initializeApp({ ... })),
    provideFirestore(() => getFirestore()),
  ],
  ...
})
```

## 사용

```ts
import { Firestore, collectionData, collection } from "@angular/fire/firestore";

export class AppComponent {
  fireStore: FireStore = inject(FireStore);

  constructor() {
    const itemCollection = collection(this.firestore, "items");
    this.item$ = collectionData(itemCollection);
  }
}
```
