# nodejs redis

## install

```sh
npm i redis
```

## usage

```js
const axios = require("axios").default;

const redis = require("redis");
const REDIS_PORT = 6379;
const redisClient = redis.createClient(REDIS_PORT);

const redisSet = (key, value) => {
  redisClient.set(key, JSON.stringify(value));
};

const redisGet = (req, res, next) => {
  const { id } = req.params;
  redisClient.get(id, (err, data) => {
    if (err) res.send(err);
    data !== null ? res.send(JSON.parse(data)) : next();
  });
};

// @Get("/redis/:id")
app.get("/redis/:id", redisGet, async (req, res) => {
  const { id } = req.params;
  const { data } = await axios.request({
    method: "get",
    url: `https://reqres.in/api/product/${id}`,
  });
  redisSet(id, data);
  res.send(data);
});
```
