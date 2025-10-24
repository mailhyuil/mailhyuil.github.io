# L7 http headers 보안 SOP CORS Error 발생 시 확인사항

> CORS 발생 시 서버에 리퀘스트가 오는지를 먼저 확인해라 요청이 도착하지않는다면 CORS 문제가 아닐 수 있다.

## Access-Control-Allow-Origin Error

> 다른 origin으로 부터 request를 날릴 때 발생
>
> > 서버는 반드시 response header에 Access-Control-Allow-Origin을 포함해야한다.

## No 'Access-Control-Allow-Origin' header is present on the requested resource.

> requested resource에 Access-Control-Allow-Origin 헤더가 없다.

## Preflight Response is Not Successful

> 브라우저가 날린 preflight request에 대한 response가 성공적이지 않다.

## Credentials Issue

> credentials를 사용하면 서버는 Access-Control-Allow-Credentials 헤더에 true를 포함해야한다.
>
> > 만약 안하면 브라우저는 cookies, Authorization headers, TLS client certificates를 요청에 포함하지 않는다.

## Methods and Headers Issue

> 서버는 허용할 methods와 headers를 명시해야한다.
>
> > 허용하지 않는다면 브라우저는 요청을 보내지 않는다.

## 확인 순서

```sh
1. Check the browser console for CORS errors and issues. The console will show any CORS-related errors, including the specific error message and the line of code causing the error.

2. Verify that the server is sending the correct CORS headers. The server should send the 'Access-Control-Allow-Origin', 'Access-Control-Allow-Methods', 'Access-Control-Allow-Headers', and 'Access-Control-Allow-Credentials' headers, as appropriate.

3. Ensure that a firewall or proxy does not block the request. Firewalls and proxies can block requests to different origins, causing CORS errors.

4. Check if the request is being made using HTTPS or HTTP. Some servers may not allow CORS requests over HTTP.

5. Ensure the server is configured to allow the necessary HTTP methods and headers. If the server does not allow them, the browser will not send the request to the server.
```

## 해결 방법

```sh
1. Add the 'Access-Control-Allow-Origin' header to the server response. This header specifies the origins that are allowed to access the resource.

2. Set the 'Access-Control-Allow-Credentials' header to 'true' if using credentials. This header tells the browser to send cookies or authorization headers with the request.
3. Allow the necessary HTTP methods and headers in the server configuration. This will ensure that the server allows the requested methods and headers.

4. If a firewall or proxy blocks the request, configure them to allow the request. You may need to allowlist the web application's domain in the firewall or proxy configuration.

5. Use a proxy server to route the request to the server from the same origin. This can bypass the CORS restrictions and allow the web application to access the necessary resources.
```
