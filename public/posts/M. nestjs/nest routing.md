# nest routing

## app-routing.module.ts

> app.module.ts에 import

```ts
import { PostModule } from "./app/post/post.module";
import { AuthModule } from "./auth/auth.module";
import { Module } from "@nestjs/common";
import { RouterModule, Routes } from "@nestjs/core";

const routes: Routes = [
  { path: "auth", module: AuthModule },
  { path: "post", module: PostModule },
];

@Module({
  imports: [RouterModule.register(routes), PostModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```
