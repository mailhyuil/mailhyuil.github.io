# angular JIT

> import '@angular/compiler'; 추가

```ts
import "@angular/compiler"; // 추가
import { Injectable, inject } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
@Injectable({
  providedIn: "root",
})
export class ToastService {
  snackBar = inject(MatSnackBar);
  openSuccess(message: string) {
    return this.snackBar.open(message, "확인", {
      panelClass: ["snackbar-success"],
    });
  }
  openDanger(message: string) {
    return this.snackBar.open(message, "확인", {
      panelClass: ["snackbar-danger"],
    });
  }
  openWarning(message: string) {
    return this.snackBar.open(message, "확인", {
      panelClass: ["snackbar-warning"],
    });
  }
  openPrimary(message: string) {
    return this.snackBar.open(message, "확인", {
      panelClass: ["snackbar-primary"],
    });
  }
}
```
