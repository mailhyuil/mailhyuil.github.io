# mongoose relation

## user.schema.ts

```ts
import * as mongoose from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Post } from "./post.schema";

@Schema()
export class User {
  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }] })
  posts: Post[];
}

export const UserSchema = SchemaFactory.createForClass(User);
```

## post.schema.ts

```ts
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { User } from "./user.schema";

@Schema()
export class Post {
  @Prop()
  title: string;

  @Prop()
  content: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "User" })
  user: User;
}

export const PostSchema = SchemaFactory.createForClass(Post);
```
