# prisma encryption - prisma-field-encryption

## install

```sh
npm i prisma-field-encryption

# generate encryption key
cloak generate
```

## .env

```txt
PRISMA_FIELD_ENCRYPTION_KEY=k1.aesgcm256.DbQoar8ZLuUsOHZNyrnjlskInHDYlzF3q6y1KGM7DUM=
```

## prisma.service.ts

```ts
import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { fieldEncryptionExtension } from "prisma-field-encryption";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    this.$extends(
      fieldEncryptionExtension({
        encryptionKey: process.env.PRISMA_FIELD_ENCRYPTION_KEY,
      }),
    );
    await this.$connect();
  }
}
```

## user.schema

```prisma
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  emailHash String? @unique /// @encryption:hash(email)
  name  String
  identification String /// @encrypted
  posts Post[]
}
```
