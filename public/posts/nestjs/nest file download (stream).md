# nest file download (stream)
```ts
@Get('file')
getFile(@Res() res: Response) {
    const file = createReadStream(join(process.cwd(), 'package.json'));
    file.pipe(res as unknown as NodeJS.WritableStream);
}
```