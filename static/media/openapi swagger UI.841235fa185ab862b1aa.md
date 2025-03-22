# openapi swagger UI

> openapi.json을 swagger UI로 보여주는 방법

## install

```sh
npm i swagger-ui-dist
# express
npm i swagger-ui-express
```

## usage

```ts
import { SwaggerUIBundle } from "swagger-ui-dist";

window.onload = () => {
  window.ui = SwaggerUIBundle({
    url: "https://petstore3.swagger.io/api/v3/openapi.json",
    dom_id: "#swagger-ui",
  });
};
```

## express

```ts
const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
```
