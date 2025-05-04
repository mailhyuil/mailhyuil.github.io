# winston winston-transport

> custom transport를 만드는 라이브러리

## install

```sh
npm i winston-transport
```

## usage

```ts
import Transport from "winston-transport";
import util from "util";
// Inherit from `winston-transport` so you can take advantage
// of the base functionality and `.exceptions.handle()`.
export class CustomTransport extends Transport {
  constructor(opts) {
    super(opts);
    //
    // Consume any custom options here. e.g.:
    // - Connection information for databases
    // - Authentication information for APIs (e.g. loggly, papertrail,
    //   logentries, etc.).
    //
  }

  log(info, callback) {
    setImmediate(() => {
      this.emit("logged", info);
    });

    // Perform the writing to the remote service

    callback();
  }
}
```
