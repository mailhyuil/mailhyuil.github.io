# nest routing

> url에 자동으로 path를 붙여준다

## app-routing.module.ts

> app.module.ts에 import

```ts
import { PostModule } from "./app/post/post.module";
import { AuthModule } from "./auth/auth.module";
import { Module } from "@nestjs/common";
import { RouterModule, Routes } from "@nestjs/core";

const routes: Routes = [
  { path: "auth", module: AuthModule },
  { path: "post", module: PostModule }, // path 추가
];

@Module({
  imports: [RouterModule.register(routes)], // Module 추가
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

## AppModule

```ts
@Module({
  imports: [
    AppRoutingModule,
    PostModule
  ],
})
```
