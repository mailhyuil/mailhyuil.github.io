# langchain Vector Stores

> langchain에서 제공하는 In-Memory Vector Store
>
> > Embedding Model을 Vector Store에 설정
> >
> > > 값은 Document 타입을 사용한다.
> > >
> > > > delete 함수를 아직 지원하지 않는다.

```ts
import type { Document } from "@langchain/core/documents";
import { OpenAIEmbeddings } from "@langchain/openai";
import { Injectable } from "@nestjs/common";
import { MemoryVectorStore } from "langchain/vectorstores/memory";

@Injectable()
export class VectorStore implements OnModuleInit {
  embeddings: OpenAIEmbeddings;
  vectorStore: MemoryVectorStore;

  onModuleInit() {
    this.init();
  }

  init() {
    this.embeddings = new OpenAIEmbeddings({
      model: "text-embedding-3-small",
    });
    this.vectorStore = new MemoryVectorStore(this.embeddings);
  }

  async add(docs: Document[]) {
    return this.vectorStore.addDocuments(docs);
  }

  async get(query: string, k: number, filter?: (doc: Document) => boolean) {
    // query: 검색할 문장, k: 반환할 문서 수, filter: 필터 함수
    // 벡터 저장소를 직접 검색
    // 사용이 간단하다.
    return await this.vectorStore.similaritySearch(query, k, filter);
  }

  async retrieve(query: string, k?: number, filter?: (doc: Document) => boolean) {
    // query: 검색할 문장, k: 반환할 문서 수, filter: 필터 함수, searchType: 검색 방법, searchKwargs: 검색 옵션
    // retriever를 사용하여 검색
    // 활용 범위가 더 넓고 다양한 옵션을 제공한다.
    const retriever = this.vectorStore.asRetriever({
      searchType: "mmr",
      searchKwargs: {
        fetchK: 10,
      },
      filter,
      k,
    });
    return await retriever.invoke(query);
  }
}
```
