# mongoose nestjs setup

## install

```sh
npm i @nestjs/mongoose mongoose
```

## app.module.ts

> mongodb와 연결

```ts
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [MongooseModule.forRoot("mongodb://localhost/nest")],
})
export class AppModule {}
```

## schemas/cat.schema.ts

> collection의 schema를 정의

```ts
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CatDocument = HydratedDocument<Cat>;

@Schema()
export class Cat {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  breed: string;

  @Prop([String])
  tags: string[];
}

export const CatSchema = SchemaFactory.createForClass(Cat);
```

## cat/cat.module.ts

> collection의 schema를 모듈에 등록

```ts
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CatsController } from "./cats.controller";
import { CatsService } from "./cats.service";
import { Cat, CatSchema } from "./schemas/cat.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
```

## cat/cat.service.ts

> model 인스턴스를 통해서 document를 다룬다.

```ts
import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Cat } from "./schemas/cat.schema";
import { CreateCatDto } from "./dto/create-cat.dto";
import { InjectConnection } from "@nestjs/mongoose";

@Injectable()
export class CatsService {
  // InjectConnection은 Native mongodb를 사용할 때 사용
  constructor(@InjectConnection() private connection: Connection, @InjectModel(Cat.name) private catModel: Model<Cat>) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }
}
```
