# firebase firestore

> 콘솔 -> firestore -> 데이터베이스 생성

## install

```sh
# firebase 설정 추가
ng add @angular/fire
```

## CRUD

> firestore.collection(collectionName).doc(docId).method()
>
> > addDoc, getDocs, updateDoc, deleteDoc, doc, collection, collectionData

```ts
//get
const collections = collection(this.firestore, "memos");
this.memos = await lastValueFrom(collectionData(collections), {
  defaultValue: [],
});

//set
const body = this.formGroup.getRawValue();
const docRef = addDoc(collection(this.firestore, "memos"), body);
console.log(docRef);
```
