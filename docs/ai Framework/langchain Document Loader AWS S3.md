# langchain Document Loader AWS S3

> unstructured api 서비스는 s3의 pdf, json.. 등등의 데이터를 Document로 변환해주는 서비스입니다.

## install

```sh
npm i @langchain/community @langchain/core @aws-sdk/client-s3
```

## usage

```ts
import { S3Loader } from "@langchain/community/document_loaders/web/s3";

const loader = new S3Loader({
  bucket: "my-document-bucket-123",
  key: "My_Document.pdf",
  s3Config: {
    region: "us-east-1",
    credentials: {
      accessKeyId: "",
      secretAccessKey: "",
    },
  },
  unstructuredAPIURL: "http://localhost:8000/general/v0/general",
  unstructuredAPIKey: "", // this will be soon required
});

const docs = await loader.load();

console.log(docs);
```
