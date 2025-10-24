# langchain Vector Retriever Fusion - Ensemble

```ts
import { EnsembleRetriever } from "langchain/retrievers/ensemble";
import { Document } from "@langchain/core/documents";

const retriever = new EnsembleRetriever({
  retrievers: [retriever1, retriever2],
  weights: [0.5, 0.5],
});

const query = "apples";
const retrievedDocs = await retriever.invoke(query);

console.log(retrievedDocs);

/*
  [
    Document { pageContent: 'You like apples', metadata: { source: 2 } },
    Document { pageContent: 'I like apples', metadata: { source: 1 } },
    Document { pageContent: 'You like oranges', metadata: { source: 2 } },
    Document {
      pageContent: 'apples and oranges are fruits',
      metadata: { source: 1 }
    }
  ]
*/
```
