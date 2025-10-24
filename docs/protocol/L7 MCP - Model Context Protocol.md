# ai base MCP (Model Context Protocol)

> OpenAI에서 제안한 "모델에게 문맥(Context)을 체계적으로 전달하는 표준" 을 만들기 위한 프로토콜 (JSON-RPC 2.0 기반)
>
> Resources, Tools, Prompts을 LLM 어플리케이션에 안전하고 표준화된 방법으로 전달하기 위한 프로토콜
>
> > MCP를 통해서 LLM 앱(e.g. claude, cursor..)의 기능을 확장할 수 있다.
> >
> > e.g. Desktop Commander MCP Server, Sequential Thinking MCP Server, GitHub MCP Server, etc.

## Model Context Protocol Server

> MCP를 통해서 input을 받아서 Resources, Tools, Prompts를 제공하는 서버
>
> > [smithery](https://www.smithery.ai)
