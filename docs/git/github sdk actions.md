# github sdk actions

> github actions를 다루는 client library

## install

```sh
npm i @actions/core

npm i @actions/exec
npm i @actions/glob
npm i @actions/http-client
npm i @actions/io
npm i @actions/tool-cache
npm i @actions/artifact
npm i @actions/cache
npm i @actions/attest
npm i @actions/github # octokit
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
