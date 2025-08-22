# langchain Multimodality

> Modality: 양식
>
> > 텍스트, 이미지, 오디오, 비디오 등 서로 다른 형태의 데이터를 처리할 수 있는 능력
> >
> > > 사용자가 image나 pdf같은 파일을 업로드할 수 있게끔 만드는 기술

```ts
import { HumanMessage } from "@langchain/core/messages";
import { ChatOpenAI } from "@langchain/openai";

const model = new ChatOpenAI({
  model: "gpt-4o",
}).bindTools([weatherTool]);

const message = new HumanMessage({
  content: [
    {
      type: "text",
      text: "describe the weather in this image",
    },
    {
      type: "image_url",
      image_url: {
        url: imageUrl, // 사용자가 보낸 image의 url을 프롬프트에 넣어 사용
      },
    },
  ],
});

const response = await model.invoke([message]);

console.log(response.tool_calls);
```
