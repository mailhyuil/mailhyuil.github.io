# LangGraph Runtime

> createAgent는 내부적으로 LangGraph 런타임 위에서 돈다. 이때 Runtime 객체가 주입
>
> > `툴`이랑 `미들웨어` 안에서 접근 가능.

## properties

1. **context**: 이번 호출(run) 동안 유효한 정적 컨텍스트(유저ID, 테넌트, DB 커넥션, 지역/언어 등)
2. **store**: 장기 메모리용 BaseStore 인스턴스(키-값 저장, 에이전트 기억)
3. **streamWriter**: "custom" 스트림 모드로 툴 진행상황/중간 이벤트를 흘릴 때 쓰는 writer

## usage

```ts
import * as z from "zod";
import { tool } from "langchain";
import { type Runtime } from "@langchain/langgraph";

const contextSchema = z.object({ userName: z.string() });

export const fetchPrefs = tool(
  async (_input, runtime: Runtime<z.infer<typeof contextSchema>>) => {
    const user = runtime.context?.userName; // ← 컨텍스트 사용
    if (!user) throw new Error("userName 필요");

    // 장기 메모리 조회 (네임스페이스, 키)
    const memo = await runtime.store?.get(["users"], user);
    const prefs = memo?.value?.preferences ?? "짧고 공손한 톤 선호";

    // 진행 상황 스트리밍(옵션)
    await runtime.streamWriter?.write({ type: "custom", data: { stage: "FETCHED_PREFS" } });

    return prefs;
  },
  { name: "fetch_prefs", description: "유저 메일 톤/선호 조회", schema: z.object({}) },
);
```
