# nest base mixin

## controller

```ts
export interface ICrudController<T = any> {
  get(id: number): Promise<T>;
  list(): Promise<T[]>;
  create(data: T): Promise<T>;
  update(id: number, data: T): Promise<T>;
  delete(id: number): Promise<T>;
}

export function CrudControllerMixin(service: ICrudService): Type<ICrudController<any>> {
  class CrudControllerHost {
    @Inject(service) private readonly crudService;

    @Get(":id")
    async get(@Param("id") id: number) {
      return await this.crudService.get(id);
    }
    @Get()
    async list() {
      return await this.crudService.list();
    }
    @Post()
    async create(@Body() data: CreateDto) {
      return await this.crudService.create(data);
    }
    @Put(":id")
    async update(@Param("id") id: number, @Body() data: UpdateDto) {
      return await this.crudService.update(id, data);
    }
    @Delete(":id")
    async delete(@Param("id") id: number) {
      return await this.crudService.delete(id);
    }
  }
  return CrudControllerHost;
}

@Controller()
export class SomeController extends CrudControllerMixin(SomeService) {}
```

## service

```ts

```
