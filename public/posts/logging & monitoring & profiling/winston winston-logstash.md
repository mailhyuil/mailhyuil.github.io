# winston winston-logstash

## install

```sh
npm i winston-logstash

```

## usage

```js
// See test cases from test-bench/winston-3x/test/smoke.js
const winston = require("winston");
const LogstashTransport = require("winston-logstash/lib/winston-logstash-latest");

const logger = winston.createLogger({
  transports: [
    new LogstashTransport({
      port: 28777,
      node_name: "my node name",
      host: "127.0.0.1",
    }),
  ],
});

logger.info("Hello world!");
```

## logstash config

```conf
# See example from test-bench/logstash/logstash/pipeline/default.conf
input {
  # Sample input over TCP
  tcp { port => 28777 type=>"sample" }
}
output {
  stdout { debug => true }
}

filter {
  json {
    source => "message"
  }
}
```
