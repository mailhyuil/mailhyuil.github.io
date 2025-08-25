# nestia

## install

```sh
npx nestia setup
```

## user.dto.ts

```ts
import { tags } from "typia";

export interface UserDto {
  /**
   * Primary Key.
   */
  id: string & tags.Format<"uuid">;
  /**
   * name of the user.
   */
  name: string & tags.MinLength<3> & tags.MaxLength<20>;
  /**
   * email of the user.
   */
  email: string & tags.Format<"email">;
  /**
   * password of the user.
   *
   * @internal
   */
  password: string & tags.MinLength<6>;
}

export interface CreateUserDto {
  name: string & tags.MinLength<3> & tags.MaxLength<20>;
  email: string & tags.Format<"email">;
  password: string & tags.MinLength<6>;
  passwordConfirm: string & tags.MinLength<6>;
}
```

## user.controller.ts

```ts
import { TypedBody, TypedParam, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import { CreateUserDto } from "./user.dto";
import { UserService } from "./user.service";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}
  @TypedRoute.Get()
  async findAll() {
    return this.userService.findAll();
  }
  @TypedRoute.Get(":id")
  async findById(@TypedParam("id") id: string) {
    return this.userService.findById(id);
  }
  @TypedRoute.Post()
  async create(@TypedBody() body: CreateUserDto) {
    return this.userService.create(body);
  }
  @TypedRoute.Put(":id")
  async update(@TypedParam("id") id: string, @TypedBody() body: CreateUserDto) {
    return this.userService.update(id, body);
  }
  @TypedRoute.Delete(":id")
  async delete(@TypedParam("id") id: string) {
    this.userService.delete(id);
  }
}
```
