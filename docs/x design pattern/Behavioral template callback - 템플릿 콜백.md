# Behavioral template callback - 템플릿 콜백

> callback 함수를 매개변수로 넘겨서 미리 설계해놓은 템플릿 함수내에서 실행시키는 패턴
>
> > "종단 관심사"를 분리하는 패턴
> >
> > > "횡단 관심사"를 분리하기 위해서는 decorator 또는 proxy 패턴을 사용해라

## delete-modal component

```ts
@Component({
  selector: "app-delete-modal",
  templateUrl: "./delete-modal.component.html",
  styleUrl: "./delete-modal.component.scss",
  standalone: true,
})
export class DeleteModalComponent {
  dialogService = inject(DialogService);
  @Input() submit: () => void;

  _submit() {
    this.submit(); // Input으로 받은 callback 함수를 실행
    this.dialogService.close();
  }
}
```

## user page

```ts
@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.scss",
  standalone: true,
})
export class UserComponent {
  dialogService = inject(DialogService);
  http = inject(HttpClient);
  route = inject(ActivatedRoute);
  get id() {
    return this.route.snapshot.params.id;
  }

  delete() {
    this.dialogService.open(DeleteModalComponent, {
      data: {
        // Input으로 callback을 전달
        submit: () => {
          this.http.delete(`http://localhost:3000/api/v1/users/${this.id}`).subscribe({
            next: () => {
              alert("삭제되었습니다.");
            },
            error: error => {
              if (error instanceof HttpErrorResponse) {
                throw new UserFriendlyError(`
유저를 삭제할 수 없습니다.
개발자에게 문의해주세요.
`);
              }
              throw error;
            },
          });
        },
      },
    });
  }
}
```
