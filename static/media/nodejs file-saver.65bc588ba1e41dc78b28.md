# nodejs file-saver

> 파일 저장 같은 기능을 할 수 있는 라이브러리

## install

```sh
npm i file-saver
```

## 사용

```js
import { saveAs } from 'file-saver';

saveAs(blob as Blob, 'pdf-export.pdf');
```
