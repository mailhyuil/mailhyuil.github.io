# langchain Tool push notification

## push.ts

```ts
import { tool } from "@langchain/core/tools";
import dotenv from "dotenv";
import z from "zod";

dotenv.config();
const pushoverToken = process.env.PUSHOVER_TOKEN;
const pushoverUser = process.env.PUSHOVER_USER;
const pushoverEndpoint = "https://api.pushover.net/1/messages.json";

export const push = async ({ message }: { message: string }) => {
  console.log(`Push: ${message}`);

  if (!pushoverToken || !pushoverUser) {
    console.error("Pushover 토큰 또는 사용자 ID가 설정되지 않았습니다.");
    return "Pushover 토큰 또는 사용자 ID가 설정되지 않았습니다.";
  }

  const payload = {
    user: pushoverUser,
    token: pushoverToken,
    message,
  };

  try {
    const res = await fetch(pushoverEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const json = await res.json();
    console.log(json);
    if (json.status === 1) {
      console.log("푸시 알림이 성공적으로 전송되었습니다!");
      return `푸시 알림이 성공적으로 전송되었습니다. ${message}`;
    } else {
      console.error("푸시 알림 전송 실패:", json.errors);
      return `푸시 알림 전송 실패: ${json.errors}`;
    }
  } catch (error) {
    console.error("푸시 알림 전송 중 오류 발생:", error);
  }
};

export const pushTool = tool(push, {
  name: "push-tool",
  description: "Send a push notification to the user",
  schema: z.object({
    message: z.string(),
  }),
});
```
