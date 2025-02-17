# langchain Document Loader Playwright

## install

```sh
npm i @langchain/community @langchain/core playwright
```

## usage

```ts
import { PlaywrightWebBaseLoader } from "@langchain/community/document_loaders/web/playwright";

/**
 * Loader uses `page.content()`
 * as default evaluate function
 **/
const loader = new PlaywrightWebBaseLoader("https://www.tabnews.com.br/");

const docs = await loader.load();
```
