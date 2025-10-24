# langchain Vector Text Spliters

> 긴 텍스트를 작은 단위로 나누어 개별적으로 색인할 수 있도록 하는 기능
>
> > 각 Splitter는 특정한 규칙을 통해 텍스트를 나누어준다.
> >
> > > 작은 청크: 단어 단위로 저장 시 이점이 있는 서비스, 문맥이 필요없는 서비스 (추천, 검색 등)
> > >
> > > 큰 청크: 문장 단위로 저장 시 이점이 있는 서비스, 문맥이 필요한 서비스 (히스토리 등)

## options

```txt
chunkSize: number : 각 청크의 최대 길이
chunkOverlap: number : 인접한 청크 사이에 중복으로 포함될 문자의 수
lengthFunction : 청크의 길이를 계산하는 함수
separator: string : 분할된 각 청크를 구분할 때 기준이 되는 문자열
keepSeparator: boolean
```

## CharacterTextSplitter

> \n\n을 기준으로 텍스트를 나눠주는 클래스

```ts
import { CharacterTextSplitter } from "langchain/textsplitters";

const splitter = new CharacterTextSplitter({
  chunkSize: 100,
  chunkOverlap: 10,
  lengthFunction: text => text.length,
});

const text = splitter.split("Hello, World!");
```

## RecursiveTextSplitter

> ["\n\n", "\n", " ", ""]을 기준으로 텍스트를 나눠주는 클래스
>
> > 클래스는 텍스트를 재귀적으로 분할하여 의미적으로 관련 있는 텍스트 조각들이 같이 있도록 하는 목적
> >
> > > 문장이 온전하게 유지된 채로 나누어질 수 있다.

## MarkdownHeaderTextSplitter

> (#, ##, ### 등)을 기준으로 텍스트를 나눠주는 클래스

## HTMLHeaderSplitter

> (h1, h2, h3 등)을 기준으로 텍스트를 나눠주는 클래스
