# nestjs-form-data

> formData를 validation하는 미들웨어

## install

```sh
npm i nestjs-form-data
```

## app.module.ts

```ts
import { NestjsFormDataModule } from "nestjs-form-data";

@Module({
  imports: [NestjsFormDataModule],
})
export class AppModule {}
```

## controller

```ts
@Controller()
export class NestjsFormDataController {
  @Post("load")
  @FormDataRequest()
  getHello(@Body() testDto: FormDataTestDto): void {
    console.log(testDto);
  }
}
```

## dto

```ts
export class FormDataTestDto {
  @IsFile()
  @MaxFileSize(1e6)
  @HasMimeType(["image/jpeg", "image/png"])
  avatar: MemoryStoredFile;
}
```
