# angular service

> nuxt의 composable와 같다

## /services/http.service.ts

```ts
@Injectable({
  providedIn: "root",
})
export class HttpService {
  private readonly baseUrl = `${environment.baseUrl}`;

  constructor(private readonly httpClient: HttpClient) {}

  get<T>(url: string, option?: HttpServiceOptions) {
    return this.httpClient.get<T>(`${this.baseUrl}/${url}`, {
      ...option,
      withCredentials: true,
    });
  }

  post<T>(url: string, body: any, option?: HttpServiceOptions) {
    return this.httpClient.post<T>(`${this.baseUrl}/${url}`, body, {
      ...option,
      withCredentials: true,
    });
  }

  put<T>(url: string, body: any, option?: HttpServiceOptions) {
    return this.httpClient.put<T>(`${this.baseUrl}/${url}`, body, {
      ...option,
      withCredentials: true,
    });
  }

  patch<T>(url: string, body: any, option?: HttpServiceOptions) {
    return this.httpClient.patch<T>(`${this.baseUrl}/${url}`, body, {
      ...option,
      withCredentials: true,
    });
  }

  delete<T>(url: string, option?: HttpServiceOptions) {
    return this.httpClient.delete<T>(`${this.baseUrl}/${url}`, {
      ...option,
      withCredentials: true,
    });
  }
}
```
