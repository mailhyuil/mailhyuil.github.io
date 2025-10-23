# ionic modalController custom

## ts

```ts
async submit(){
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'custom-action-sheet',
    });
    await modal.present();
    await modal.onDidDismiss();
  }
```

## css

```css
ion-modal.custom-action-sheet {
}
```
