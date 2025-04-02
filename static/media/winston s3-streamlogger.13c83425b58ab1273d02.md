# winston s3-steamlogger

## install

```sh
npm i winston
npm i s3-streamlogger
```

## usage

```js
const winston = require("winston");
const { S3StreamLogger } = require("s3-streamlogger");

const s3_stream = new S3StreamLogger({
  bucket: "mys3bucket",
  folder: "logs",
});

const transport = new winston.transports.Stream({
  stream: s3_stream,
});
// see error handling section below
transport.on("error", function (err) {
  /* ... */
});

const logger = winston.createLogger({
  transports: [transport],
});

logger.info("Hello Winston!");
```
