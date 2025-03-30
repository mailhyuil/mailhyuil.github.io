# express Params & Query

## Params

```js
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  res.send(`This action returns user #${id}`);
});
```

## Query

```js
app.get("/users", (req, res) => {
  const name = req.query.name;
  res.send(`This action returns users with name ${name}`);
});
```
