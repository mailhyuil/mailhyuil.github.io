# github sdk

## install

```sh
npm i @actions/core

npm i @actions/exec
npm i @actions/glob
npm i @actions/http-client
npm i @actions/io
npm i @actions/tool-cache
npm i @actions/github
npm i @actions/artifact
npm i @actions/cache
npm i @actions/attest
```

# usage

```ts
import * as core from "@actions/core";

async function run() {
  try {
    const ms = core.getInput("milliseconds");
    console.log(`Waiting ${ms} milliseconds ...`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
```
