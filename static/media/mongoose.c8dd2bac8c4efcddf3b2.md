# nest mongoose

## install

```sh
npm i mongoose
```

## mongoose.provider.ts

```ts
import * as mongoose from "mongoose";

export const mongooseProvider = [
  {
    provide: "DATABASE_CONNECTION",
    useFactory: () => mongoose.connect("mongodb+srv://mongo:1234@my-cluster.uh7w7gq.mongodb.net/?retryWrites=true&w=majority"),
  },
];
```

## mongoose.module.ts

```ts
import { Global, Module } from "@nestjs/common";
import { mongooseProvider } from "./mongoose.provider";

@Global()
@Module({
  providers: [...mongooseProvider],
  exports: [...mongooseProvider],
})
export class MongooseModule {}
```

## mongoose/schemas/user.schema.ts

```ts
import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  name: String,
  password: String,
});
```

## user.interface.ts

```ts
export interface User extends Document {
  readonly name: string;
  readonly password: string;
}
```

## user.provider.ts

```ts
import { Connection } from "mongoose";
import { UserSchema } from "../../mongoose/schemas/user.schema";

export const UserProvider = [
  {
    provide: "USER_MODEL",
    useFactory: (connection: Connection) => connection.model("User", UserSchema),
    inject: ["DATABASE_CONNECTION"],
  },
];
```

## user.service.ts

```ts
import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { User, ICreateUserDTO } from "./interface/user.interface";

@Injectable()
export class UserService {
  constructor(
    @Inject("USER_MODEL")
    private userModel: Model<User>
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async create(data: ICreateUserDTO): Promise<User> {
    const createdUser = new this.userModel(data);
    return createdUser.save();
  }
}
```

## app.module.ts

```ts
@Module({
  imports: [MongooseModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```
