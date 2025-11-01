# LangGraph Stream

> model의 응답을 실시간으로 받아서 처리

## usage

```ts
const stream = await app.stream({ messages: [new HumanMessage(message)] }, { configurable: { thread_id } });

for await (const chunk of stream) {
  console.log(chunk);
}
```

## streamMode

> 메세지 스트리밍에는 `streamMode: messages`를 사용

### values

> State 전체를 반환
>
> > `chunk.messages[chunk.messages.length - 1].content`로 메세지 접근

```ts
{
  messages: [
    HumanMessage {
      "id": "bb619361-f474-47fb-8f45-223c955c702d",
      "content": "Hello, how are you?",
      "additional_kwargs": {},
      "response_metadata": {}
    }
  ]
}
{
  messages: [
    HumanMessage {
      "id": "bb619361-f474-47fb-8f45-223c955c702d",
      "content": "Hello, how are you?",
      "additional_kwargs": {},
      "response_metadata": {}
    },
    AIMessage {
      "id": "chatcmpl-CX1Qx8ZGZ9lWEakKrXEz2z5qGDrG5",
      "content": "Hello! I'm just a program, so I don't have feelings, but I'm here and ready to help you. How can I assist you today?",
      "additional_kwargs": {},
      "response_metadata": {
        "tokenUsage": {
          "promptTokens": 13,
          "completionTokens": 29,
          "totalTokens": 42
        },
        "finish_reason": "stop",
        "model_provider": "openai",
        "model_name": "gpt-4o-mini-2024-07-18",
        "usage": {
          "prompt_tokens": 13,
          "completion_tokens": 29,
          "total_tokens": 42,
          "prompt_tokens_details": {
            "cached_tokens": 0,
            "audio_tokens": 0
          },
          "completion_tokens_details": {
            "reasoning_tokens": 0,
            "audio_tokens": 0,
            "accepted_prediction_tokens": 0,
            "rejected_prediction_tokens": 0
          }
        },
        "system_fingerprint": "fp_560af6e559"
      },
      "tool_calls": [],
      "invalid_tool_calls": [],
      "usage_metadata": {
        "output_tokens": 29,
        "input_tokens": 13,
        "total_tokens": 42,
        "input_token_details": {
          "audio": 0,
          "cache_read": 0
        },
        "output_token_details": {
          "audio": 0,
          "reasoning": 0
        }
      }
    }
  ]
}
usage: chunk.messages[chunk.messages.length - 1].content
```

## updates

> Update 된 Node의 상태를 반환
>
> > `chunk.agent?.messages[chunk.agent?.messages.length - 1].content`로 메세지 접근

```ts
{
  agent: {
    messages: [
      AIMessage {
        "id": "chatcmpl-CX1S97oTIAXw14f9OLCylZVmRVK1U",
        "content": "Hello! I'm just a program, so I don't have feelings, but I'm here and ready to help you. How can I assist you today?",
        "additional_kwargs": {},
        "response_metadata": {
          "tokenUsage": {
            "promptTokens": 13,
            "completionTokens": 29,
            "totalTokens": 42
          },
          "finish_reason": "stop",
          "model_provider": "openai",
          "model_name": "gpt-4o-mini-2024-07-18",
          "usage": {
            "prompt_tokens": 13,
            "completion_tokens": 29,
            "total_tokens": 42,
            "prompt_tokens_details": {
              "cached_tokens": 0,
              "audio_tokens": 0
            },
            "completion_tokens_details": {
              "reasoning_tokens": 0,
              "audio_tokens": 0,
              "accepted_prediction_tokens": 0,
              "rejected_prediction_tokens": 0
            }
          },
          "system_fingerprint": "fp_51db84afab"
        },
        "tool_calls": [],
        "invalid_tool_calls": [],
        "usage_metadata": {
          "output_tokens": 29,
          "input_tokens": 13,
          "total_tokens": 42,
          "input_token_details": {
            "audio": 0,
            "cache_read": 0
          },
          "output_token_details": {
            "audio": 0,
            "reasoning": 0
          }
        }
      }
    ]
  }
}
```

### messages

> [message, metadata] 형태로 반환
>
> > `chunk[0].content`로 메세지 접근
> >
> > `chunk[1].langgraph_node === 'agent'`로 메타데이터 접근

```ts
[
  AIMessageChunk {
    "id": "chatcmpl-CX1SlnykXep7X5UGK58j6vKcdgcNB",
    "content": "",
    "additional_kwargs": {},
    "response_metadata": {
      "model_provider": "openai",
      "usage": {}
    },
    "tool_calls": [],
    "tool_call_chunks": [],
    "invalid_tool_calls": []
  },
  {
    tags: [],
    name: undefined,
    langgraph_step: 1,
    langgraph_node: 'agent',
    langgraph_triggers: [ 'branch:to:agent' ],
    langgraph_path: [ '__pregel_pull', 'agent' ],
    langgraph_checkpoint_ns: 'agent:5e8869fb-fa51-5fa4-94d0-788e388113d1',
    __pregel_task_id: '5e8869fb-fa51-5fa4-94d0-788e388113d1',
    checkpoint_ns: 'agent:5e8869fb-fa51-5fa4-94d0-788e388113d1',
    ls_provider: 'openai',
    ls_model_name: 'gpt-4o-mini',
    ls_model_type: 'chat',
    ls_temperature: 0,
    ls_max_tokens: 100,
    ls_stop: undefined
  }
]
[
  AIMessageChunk {
    "id": "chatcmpl-CX1SlnykXep7X5UGK58j6vKcdgcNB",
    "content": "Hello",
    "additional_kwargs": {},
    "response_metadata": {
      "model_provider": "openai",
      "usage": {}
    },
    "tool_calls": [],
    "tool_call_chunks": [],
    "invalid_tool_calls": []
  },
  {
    tags: [],
    name: undefined,
    langgraph_step: 1,
    langgraph_node: 'agent',
    langgraph_triggers: [ 'branch:to:agent' ],
    langgraph_path: [ '__pregel_pull', 'agent' ],
    langgraph_checkpoint_ns: 'agent:5e8869fb-fa51-5fa4-94d0-788e388113d1',
    __pregel_task_id: '5e8869fb-fa51-5fa4-94d0-788e388113d1',
    checkpoint_ns: 'agent:5e8869fb-fa51-5fa4-94d0-788e388113d1',
    ls_provider: 'openai',
    ls_model_name: 'gpt-4o-mini',
    ls_model_type: 'chat',
    ls_temperature: 0,
    ls_max_tokens: 100,
    ls_stop: undefined
  }
]
```

### custom

> Langchain이 지원하지 않는 LLM 모델을 사용 시

### debug

> 디버깅 정보 반환

```ts
{
  step: 1,
  type: 'task',
  timestamp: '2025-11-01T08:34:23.658Z',
  payload: {
    id: 'da46eaa7-813e-5c8a-b735-8b02c98c2f46',
    name: 'agent',
    input: { messages: [Array] },
    triggers: [ 'branch:to:agent' ],
    interrupts: []
  }
}
{
  step: 1,
  type: 'task_result',
  timestamp: '2025-11-01T08:34:25.157Z',
  payload: {
    id: 'da46eaa7-813e-5c8a-b735-8b02c98c2f46',
    name: 'agent',
    result: { messages: [Array] },
    interrupts: []
  }
}
```
