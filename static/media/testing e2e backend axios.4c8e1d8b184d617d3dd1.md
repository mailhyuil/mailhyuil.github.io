# testing e2e backend axios

## setup

```ts
/* eslint-disable */

import axios from "axios";

module.exports = async function () {
  // Configure axios for tests to use.
  const host = process.env.HOST ?? "localhost";
  const port = process.env.PORT ?? "3000";
  axios.defaults.baseURL = `http://${host}:${port}`;
};
```

## usage

```ts
import axios from "axios";

describe("GET /api", () => {
  it("should return a message", async () => {
    const res = await axios.get(`/api`);

    expect(res.status).toBe(200);
    expect(res.data).toEqual({ message: "Hello API" });
  });
});
```
