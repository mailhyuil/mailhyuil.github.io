# Qdrant

> rust 기반의 오픈소스 벡터 데이터베이스

## docker-compose.yml

```yml
services:
  qdrant:
    image: qdrant/qdrant:latest
    restart: always
    container_name: qdrant
    ports:
      - 6333:6333
      - 6334:6334
    expose:
      - 6333
      - 6334
      - 6335
    configs:
      - source: qdrant_config
        target: /qdrant/config/production.yaml
    volumes:
      - ./qdrant_data:/qdrant/storage

configs:
  qdrant_config:
    content: |
      log_level: INFO
```

## install

```sh
npm i @qdrant/qdrant-js
```

## usage

```ts
import { QdrantClient } from "@qdrant/js-client-rest";
// import { QdrantClient } from "@qdrant/js-client-grpc";

const client = new QdrantClient({ host: "127.0.0.1", port: 6333 });

const findPetsByStatus = fetcher.path("/pet/findByStatus").method("get").create();
const addPet = fetcher.path("/pet").method("post").create();

try {
  const collection = await client.getCollection("bom-ada-002");
  // ...
} catch (e) {
  // check which operation threw the exception
  if (e instanceof client.getCollection.Error) {
    // get discriminated union error { status, data }
    const error = e.getActualType();
    // sort case's logic
    if (error.status === 400) {
      error.data.status.error; // only available for a 4xx responses
    } else if (error.status === 500) {
      error.data.status.error; // only available for a 500 response
    } else {
      error.data.result;
      // ...
    }
  }
}
```
