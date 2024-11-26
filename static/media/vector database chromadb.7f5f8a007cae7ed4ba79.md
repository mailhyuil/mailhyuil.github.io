# vector database chromadb

## install

```sh
npm i chromadb
```

## usage

```js
import { ChromaClient } from "chromadb";
import { OpenAIEmbeddingFunction } from "chromadb";

/// Get the Chroma Client
const client = new ChromaClient();

/// Create a collection
const embedder = new OpenAIEmbeddingFunction({
  openai_api_key: "your_api_key",
});
const collection = await client.createCollection({
  name: "my_collection",
  embeddingFunction: embedder,
});

/// Add some text documents to the collection
await collection.add({
  ids: ["id1", "id2"],
  //   embeddings: [
  //     [1.2, 2.3, 4.5],
  //     [6.7, 8.2, 9.2],
  //   ],
  metadatas: [{ source: "my_source" }, { source: "my_source" }],
  documents: ["This is a document", "This is another document"],
});

/// Query the collection
const results = await collection.query({
  nResults: 2,
  queryTexts: ["This is a query document"],
});
```
