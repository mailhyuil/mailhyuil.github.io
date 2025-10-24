# nest base pipe file-validation

## pipe

```ts
import { PipeTransform, Injectable, ArgumentMetadata } from "@nestjs/common";

@Injectable()
export class FileSizeValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // "value" is an object containing the file's attributes and metadata
    const oneKb = 1000;
    return value.size < oneKb;
  }
}

@Injectable()
export class FileExtensionValidationPipe implements PipeTransform {
  constructor(private readonly allowedExtensions: string[]) {}

  transform(value: any, metadata: ArgumentMetadata) {
    // "value" is an object containing the file's attributes and metadata
    const fileExtension = value.originalname.split(".").pop();
    return this.allowedExtensions.includes(fileExtension);
  }
}
```

## usage

```ts
@Post('file')
uploadFileAndPassValidation(
  @Body() body: SampleDto,
  @UploadedFile(
    new ParseFilePipe({
      validators: [
        new FileSizeValidationPipe(),
        new FileExtensionValidationPipe(['png', 'jpg']),
      ]
    })
  )
  file: Express.Multer.File,
) {
  return {
    body,
    file: file.buffer.toString(),
  };
}
```
