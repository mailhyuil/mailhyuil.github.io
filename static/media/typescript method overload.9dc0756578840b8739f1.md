# typescript method overload

## 오버로드 시그니처 방식

### interface

```ts
import { Request } from "express";

export interface IStorageService {
  list(): Promise<string[]>;
  upload(name: string, buffer: Buffer): Promise<{ key: string }>;
  upload(name: string, buffer: Buffer, dir: string): Promise<{ key: string }>;
  uploadByStream(req: Request): Promise<{ key: string }>;
  uploadByStream(req: Request, dir: string): Promise<{ key: string }>;
  delete(key: string): Promise<void>;
}
```

### class

> overload할 메소드를 구현없이 선언하고 선언한 모든 메소드를 구현하는 하나를 만들기
>
> > interface 없이도 가능

```ts
import { Inject, Injectable, Logger } from "@nestjs/common";
import { Request } from "express";
import { IStorageService } from "./storage.interface";
import { STORAGE_SERVICE } from "./storage.token";

@Injectable()
export class StorageService implements IStorageService {
  constructor(@Inject(STORAGE_SERVICE) private readonly storageService: IStorageService) {}

  async list() {
    return this.storageService.list();
  }

  upload(name: string, buffer: Buffer): Promise<{ key: string }>;
  upload(name: string, buffer: Buffer, dir: string): Promise<{ key: string }>;
  upload(name: string, buffer: Buffer, dir?: string) {
    if (dir && typeof dir === "string") {
      return this.storageService.upload(name, buffer, dir);
    } else {
      return this.storageService.upload(name, buffer);
    }
  }

  uploadByStream(req: Request): Promise<{ key: string }>;
  uploadByStream(req: Request, dir: string): Promise<{ key: string }>;
  uploadByStream(req: Request, dir?: string) {
    if (dir && typeof dir === "string") {
      return this.storageService.uploadByStream(req, dir);
    } else {
      return this.storageService.uploadByStream(req);
    }
  }

  delete(key: string) {
    return this.storageService.delete(key);
  }
}
```

## 제네릭(extends)을 사용한 오버로드

> extends 삼항연산자를 사용하여 overload할 수 있다.
>
> > 제네릭을 사용하면 반환값이나 인자값을 제한할 수 있다. (vscode 자동완성)

### 구현 2

> 선언을 하지않고 extends를 사용해서 바로 구현

```ts
import { DynamicModule, Module } from "@nestjs/common";
import { AwsS3StorageOptions } from "./aws-s3/aws-s3.options";
import { LocalStorageOptions } from "./local-storage/local-storage.options";
import { LocalStorageService } from "./local-storage/local-storage.service";
import { IStorageService } from "./storage.interface";
import { StorageService } from "./storage.service";
import { STORAGE_OPTIONS, STORAGE_SERVICE } from "./storage.token";

@Module({})
export class StorageModule {
  static forRoot<T extends IStorageService>({
    service,
    options,
  }: {
    service: new (...args: any[]) => T;
    options: T extends LocalStorageService ? LocalStorageOptions : AwsS3StorageOptions;
  }): DynamicModule {
    return {
      global: true,
      module: StorageModule,
      providers: [
        {
          provide: STORAGE_SERVICE,
          useClass: service,
        },
        {
          provide: STORAGE_OPTIONS,
          useValue: options,
        },
        StorageService,
        service,
      ],
      exports: [STORAGE_SERVICE, STORAGE_OPTIONS, StorageService, service],
    };
  }
}
```
