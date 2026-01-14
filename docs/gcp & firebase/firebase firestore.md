# firebase firestore - Cloud Firestore

- NoSQL 실시간 데이터베이스 (Cloud Firestore)
- 실시간 동기화 지원
- 모바일 앱 개발에 적합
- 하나의 문서를 read/write/delete 할 때마다 비용이 발생 반면 스토리지 비용은 저렴함 (0.125$ / GB)
- 하나의 문서를 map등의 객체로 저장하는 트릭을 사용할 수 있다.

## install

```sh
# firebase 설정 추가
ng add @angular/fire
```

## CRUD

- `const ref = firestore.collection(collectionName).doc(docId);`
- `ref.add(data);`
- `ref.get();`
- `ref.update(data);`
- `ref.delete();`
- `ref.doc(docId);`
- `ref.collection(collectionName);`
- `ref.collectionData();`

```ts
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import {
  Firestore,
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "@angular/fire/firestore";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatInputModule, MatButtonModule, HttpClientModule],
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage {
  memos: {
    id: string;
    content: string;
    createdAt: Timestamp;
    updatedAt: Timestamp;
  }[] = [];
  firestore: Firestore = inject(Firestore);
  collectionName = "memos";
  formGroup = new FormGroup({
    content: new FormControl(""),
  });

  async ngOnInit() {
    await this.fetchMemos();
  }

  async fetchMemos() {
    // Fetch all memos from the Firestore collection, ordered by createdAt timestamp
    const q = query(collection(this.firestore, this.collectionName), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    this.memos = querySnapshot.docs.map(doc => ({
      id: doc.id,
      content: doc.data()["content"],
      createdAt: doc.data()["createdAt"],
      updatedAt: doc.data()["updatedAt"],
    }));
  }

  async submit() {
    const body = this.formGroup.getRawValue();
    const now = new Date();
    const memoData = {
      ...body,
      createdAt: Timestamp.fromDate(now),
      updatedAt: Timestamp.fromDate(now),
    };

    try {
      // Add a new memo to the Firestore collection
      await addDoc(collection(this.firestore, this.collectionName), memoData);
      // Clear the form and refresh the memo list
      this.formGroup.reset();
      await this.fetchMemos();
    } catch (error) {
      console.error("Error adding memo:", error);
    }
  }

  async remove(id: string) {
    try {
      // Delete a memo from the Firestore collection
      await deleteDoc(doc(this.firestore, this.collectionName, id));
      // Refresh the memo list
      await this.fetchMemos();
    } catch (error) {
      console.error("Error deleting memo:", error);
    }
  }

  async update(id: string, newContent: string) {
    try {
      // Update a memo in the Firestore collection
      const now = new Date();
      const updatedData = {
        content: newContent,
        updatedAt: Timestamp.fromDate(now),
      };
      await setDoc(doc(this.firestore, this.collectionName, id), updatedData);
      // Refresh the memo list
      await this.fetchMemos();
    } catch (error) {
      console.error("Error updating memo:", error);
    }
  }
}
```
