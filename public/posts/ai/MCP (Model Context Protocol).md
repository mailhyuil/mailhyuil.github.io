# ai base MCP (Model Context Protocol)

> OpenAI에서 제안한 "모델에게 문맥(Context)을 체계적으로 전달하는 표준" 을 만들기 위한 프로토콜
>
> Resources, Tools, Prompts 등 다양한 정보를 LLM 어플리케이션에 안전하고 표준화된 방법으로 전달하기 위한 프로토콜
>
> > MCP를 통해서 local LLM(e.g. claude, cursor..)또는 LLM 앱의 기능을 확장할 수 있다.
> >
> > > [MCP Server Lists](https://www.smithery.ai)

## 기존 문제점

```txt
LLM에 정보를 줄 때마다 매번 프롬프트에 다 집어넣음
긴 텍스트 많아지면 context window 꽉 차서 잘림
중복된 정보 전달, 비효율, 무의미한 토큰 낭비 발생
```

## Model Context Protocol

> 컨텍스트를 모듈화해서 모델에게 "필요한 정보"만 정리해서 줌
>
> > 문맥을 structured하게, 체계적으로 관리함

```json
POST /tools/weather
{
  "name": "get_weather",
  "description": "Get the current weather in a given location",
  "inputSchema": {
    "type": "object",
    "properties": {
      "location": {
        "type": "string",
        "description": "The location to get the weather for"
      },
      "unit": {
        "type": "string",
        "description": "The unit of temperature to use",
        "enum": ["celsius", "fahrenheit"]
      }
    }
  }
}
```
