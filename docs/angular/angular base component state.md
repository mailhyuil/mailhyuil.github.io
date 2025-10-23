# angular base component state

> data, error, loading 등의 상태를 관리하는 베이스 컴포넌트를 만들어보자.

## base.component.ts

```typescript
@Component()
export class BaseComponent implements OnInit {
  data?: User[];
  loading: boolean = false;
  error?: string;
  constructor(private readonly httpClient: HttpClient) {}
  ngOnInit() {
    this.loading = true;
    this.httpClient.get("http://localhost:3000/api/v1/users").subscribe(
      data => {
        this.data = data;
        this.loading = false;
      },
      error => {
        this.error = "데이터를 가져오는데 실패했습니다.";
        this.loading = false;
        console.error(error);
      },
    );
  }
}
```

## base.component.html

```html
<ng-container *ngIf="!isLoading && !error && data">{{data | json}}</ng-container>
<ng-container *ngIf="loading">
  <p>로딩중...</p>
</ng-container>
<ng-container *ngIf="error">
  <p>{{ error }}</p>
</ng-container>
```
