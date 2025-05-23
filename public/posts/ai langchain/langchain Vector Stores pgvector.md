# langchain Vector Stores pgvector

## install

```sh
npm i @langchain/community @langchain/openai @langchain/core pg uuid
```

## postgres settings

```sh
services:
  db:
    hostname: 127.0.0.1
    image: pgvector/pgvector:pg16
    container_name: pgvector
    ports:
      - 5555:5432
    restart: always
    environment:
      - POSTGRES_DB=myvector
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
```

## VectorStore

```ts
import { DistanceStrategy, PGVectorStore } from "@langchain/community/vectorstores/pgvector";
import type { Document } from "@langchain/core/documents";
import { OpenAIEmbeddings } from "@langchain/openai";
import { Injectable, OnApplicationShutdown, OnModuleInit } from "@nestjs/common";
import { PoolConfig } from "pg";
import { v4 as uuid } from "uuid";

@Injectable()
export class VectorStore implements OnModuleInit, OnApplicationShutdown {
  embeddings: OpenAIEmbeddings;
  vectorStore: PGVectorStore;
  onModuleInit() {
    this.init();
  }
  onApplicationShutdown(signal?: string) {
    this.vectorStore.end();
  }

  async init() {
    this.embeddings = new OpenAIEmbeddings({
      model: "text-embedding-3-small",
    });

    const config = {
      postgresConnectionOptions: {
        type: "postgres",
        host: process.env.PG_VECTOR_HOST,
        port: process.env.PG_VECTOR_PORT,
        user: process.env.PG_VECTOR_USER,
        password: process.env.PG_VECTOR_PASSWORD,
        database: process.env.PG_VECTOR_DATABASE,
      } as PoolConfig,
      tableName: process.env.PG_VECTOR_TABLE,
      columns: {
        idColumnName: "id",
        vectorColumnName: "vector",
        contentColumnName: "content",
        metadataColumnName: "metadata",
      },
      // supported distance strategies: cosine (default), innerProduct, or euclidean
      distanceStrategy: "cosine" as DistanceStrategy,
    };

    this.vectorStore = await PGVectorStore.initialize(this.embeddings, config);
  }

  async add(docs: Document[]) {
    const docsWithIds = docs.map(doc => {
      return {
        ...doc,
        id: uuid(),
      };
    });
    return await this.vectorStore.addDocuments(docsWithIds);
  }

  async delete(ids: string[], filter?: Record<string, unknown>) {
    await this.vectorStore.delete({
      ids,
      filter,
    });
  }

  async get(query: string, k: number, filter?: Record<string, unknown>) {
    // query: 검색할 문장, k: 반환할 문서 수, filter: 필터 함수
    // 벡터 저장소를 직접 검색
    // 사용이 간단하다.
    return await this.vectorStore.similaritySearch(query, k, filter);
  }

  async retrieve(query: string, k?: number, filter?: Record<string, unknown>) {
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
