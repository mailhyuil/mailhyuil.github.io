# angular observable rendering

```html
<div *ngIf="user$ | async as user">
  <div *ngFor="let i of user.items"></div>
</div>
```

## 배열에 담아서 렌더링

```ts
result?: IPaginationDTO<IAdminDTO>;

change(){
  this.getAdmins()
}

async getAdmins() {
  this.result = await lastValueFrom(
    this.httpService.get<IPaginationDTO<IAdminDTO>>('admin/search', {
      params: {
        ...this.option,
      },
    })
  );
}
```
