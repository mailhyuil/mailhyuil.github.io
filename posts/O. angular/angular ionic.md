# @ionic/angular alert

# @ionic/angular actionSheet

# @ionic/angular toast

# @ionic/angular modal

> ModalController 사용

## modal 생성

```
ng g c modals/create-notice --type modal
```

## ts

```ts
@Component({
  selector: 'app-notice',
  templateUrl: './notice.page.html',
  styleUrls: ['./notice.page.scss'],
  standalone: true,
  imports: [ButtonComponent, CommonModule, CreateNoticeModal],
})
export class NoticePage {
  constructor(private modalController: ModalController) {}

  async openModal() {
    const modal = await this.modalController.create({
      component: CreateNoticeModal,
      componentProps: {
        key: 'value',
      },
    });

    await modal.present();

    modal.onDidDismiss().then((res) => {
      if (res) {
        // dismiss logic
      }
    });
  }

  dismiss() {
    this.modalController.dismiss({});
  }
}
```

## html

```
<button (click)="openModal()"></button>
```
