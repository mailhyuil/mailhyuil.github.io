# front file download file-saver

> 파일 저장 같은 기능을 할 수 있는 라이브러리

## install

```sh
npm i file-saver
npm i -D @types/file-saver

npm i file-saver-es
npm i -D @types/file-saver-es
```

## usage

```js
import { saveAs } from 'file-saver-es';

saveAs(url, 'pdf-export.pdf');
saveAs(blob as Blob, 'pdf-export.pdf');
```
