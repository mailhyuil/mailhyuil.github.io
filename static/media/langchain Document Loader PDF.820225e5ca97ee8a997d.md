# langchain Document Loader

## install

```sh
npm i @langchain/community @langchain/core pdf-parse
# or
npm i @langchain/community @langchain/core pdfjs-dist
```

## pdf-parse

```ts
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";

const loader = new PDFLoader("./test.pdf");
```

## pdfjs-dist

```ts
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";

const customBuildLoader = new PDFLoader(nike10kPdfPath, {
  // you may need to add `.then(m => m.default)` to the end of the import
  pdfjs: () => import("pdfjs-dist/legacy/build/pdf.js"),
});
```
