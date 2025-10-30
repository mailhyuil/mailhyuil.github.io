# LangGraph graph Config

> thread_id를 넣어서 상태를 유지할 수 있게 도와준다.
>
> > immutable한 값을 유지할 수 있게 도와준다. (e.g. userId..)

## config

```ts
const threadId = "demo-" + Math.random().toString(36).slice(2);
const config = { configurable: { thread_id: threadId, user } };

const result = await app.invoke(initialState, config);
```

## getConfig

> node, tool 등에서 config를 가져올 수 있다.

```ts
import { getConfig } from "@langchain/langgraph";

export const inputUserData = async () => {
  const config = getConfig();
  const { user } = config?.configurable as { user: User };

  console.log("inputUserData tool called with user:", user);
  if (!user.cart) {
    console.log("cart is empty");
    return {
      status: "error",
      message: "장바구니가 비어있습니다.",
    };
  }
  return {
    status: "success",
    message: "장바구니가 비어있지 않습니다.",
  };
};
```
