# testing rxjs observable

```ts
const response = mock<AxiosResponse<TossPaymentResponse, any>>();
http.post.mockImplementationOnce(() => of(response));
```
