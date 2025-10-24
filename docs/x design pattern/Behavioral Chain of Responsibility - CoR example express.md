# Behavioral Chain of Responsibility - CoR example express

```ts
import express, { RequestHandler } from "express";
const app = express();

const handler: RequestHandler = (req, res, next) => {
  if (req.query.name === "John") {
    res.send("You are not allowed to access this page");
    return;
  }
  next(); // handle(req, res, next);
};

app.use(handler);

app.get("/", (req, res, next) => {
  res.send("Hello World");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
```
