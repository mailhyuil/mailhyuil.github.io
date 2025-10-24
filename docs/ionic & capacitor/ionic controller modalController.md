# ionic controller modalController

## page.component.ts

```ts
@Component({
  selector: "app-notice",
  templateUrl: "./notice.page.html",
  styleUrls: ["./notice.page.scss"],
  standalone: true,
  imports: [ButtonComponent, CommonModule, CreateNoticeModal],
})
export class NoticePage {
  constructor(private modalController: ModalController) {}

  async openModal() {
    const modal = await this.modalController.create({
      component: CreateNoticeModal,
      componentProps: {},
    });

    await modal.present();

    const { data, role } = await modal.onDidDismiss();
  }

  dismiss() {
    this.modalController.dismiss({});
  }
}
```

## page.component.html

```html
<button (click)="openModal()"></button>
```
