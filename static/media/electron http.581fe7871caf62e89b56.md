# electron http

> new ClientRequest(options)

```ts
import { net } from "electron";

const request = net.request({
  method: "GET",
  protocol: "https:",
  hostname: "www.google.com",
  port: 443,
  path: "/",
});

request.on("response", (response) => {
  console.log(`STATUS: ${response.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(response.headers)}`);
  response.on("data", (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  response.on("end", () => {
    console.log("No more data in response.");
  });
});

request.end();
```
