# popup 하루동안 보지 않기

## popup

```ts
close() {
  window.close();
}

closeToday() {
  this.cookieService.set(`popups:${this.id}`, 'true', 1);
  window.close();
}
```

## home

```
const cookie = this.cookieService.get(`popups:${popup.id}`);
if (cookie) return;
window.open(
  `/popup?imgUrl=${popup.image.url}&id=${popup.id}`,
  '_blank',
  `resizable=no,innerWidth=${popup.width},innerHeight=${popup.height + 75},top=${index * 50},left=${index * 50}`,
);
```
