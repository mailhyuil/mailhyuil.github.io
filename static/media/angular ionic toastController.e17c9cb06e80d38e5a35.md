# ionic toastController

```ts
import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { Color } from "@ionic/core";

@Injectable({
  providedIn: "root",
})
export class ToastService {
  constructor(private readonly toastController: ToastController) {}

  async show(message: string, color: Color = "primary") {
    const toast: HTMLIonToastElement = await this.toastController.create({
      message,
      color,
      duration: 4000,
      mode: "ios",
      buttons: [{ text: "확인", handler: () => toast.dismiss() }],
    });

    toast.present();
  }
}
```
