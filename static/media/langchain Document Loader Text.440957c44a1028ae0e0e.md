# langchain Document Loader TextLoader

> txt 파일을 documents로 로드
>
> > metadata에 source를 포함하고있다.

```ts
import { TextLoader } from "langchain/document_loaders/fs/text";

const loader = new TextLoader("./test.txt");
const docs = await loader.load();
/* Output
[
  Document {
    pageContent: '안녕하세요!\n' +
      '반갑습니다\n'
    metadata: { source: './test.txt' },
    id: undefined
  }
]
*/
```
