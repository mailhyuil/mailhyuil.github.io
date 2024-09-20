# next middleware api-interceptor

> nextjs에는 interceptor가 없기 때문에 middleware를 사용하여 요청과 응답을 가로채거나
>
> > client-side app에서는 axios의 interceptor같은 기능으로 대체할 수 있다.

```ts
// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);
```
