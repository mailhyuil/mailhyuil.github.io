# html-to-image

## install

```sh
npm i html-to-image
```

## usage

```ts
toJpeg(this.certificationContent.nativeElement).then((dataUrl) => {
  const link = document.createElement("a");
  link.download = "certification.jpg";
  link.href = dataUrl;
  link.click();
});
```
