# langchain base Document

> id, pageContent, metadata로 구성된 문서입니다.
>
> > pageContent는 내용
> >
> > metadata는 추가 정보를 담고 있습니다.
> >
> > > `import type { Document } from '@langchain/core/documents';`

## Document

```ts
export declare class Document<Metadata extends Record<string, any> = Record<string, any>>
  implements DocumentInput, DocumentInterface
{
  pageContent: string;
  metadata: Metadata;
  /**
   * An optional identifier for the document.
   *
   * Ideally this should be unique across the document collection and formatted
   * as a UUID, but this will not be enforced.
   */
  id?: string;
  constructor(fields: DocumentInput<Metadata>);
}

[
  Document {
    pageContent: '고양이는 생선을 좋아합니다.',
    metadata: { source: 'https://cat-wiki.com' },
    id: undefined
  },
  Document {
    pageContent: '고양이는 사람을 좋아합니다.',
    metadata: { source: 'https://cat-wiki.com' },
    id: undefined
  }
]
```
